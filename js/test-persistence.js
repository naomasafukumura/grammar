(() => {
  const DEBUG_LOG = false; // デバッグ用フラグ（本番時は false のまま）
  const DEBOUNCE_MS = 500;
  const SUBMIT_TIMEOUT_MS = 10000; // 送信タイムアウト

  const log = (...args) => {
    if (DEBUG_LOG) {
      console.log('[test-persistence]', ...args);
    }
  };

  const debounce = (fn, wait) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), wait);
    };
  };

  const isVisible = (el) => {
    if (!el) return false;
    return window.getComputedStyle(el).display !== 'none';
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  // グローバル変数（letで定義されwindowに乗らない）の参照/更新ヘルパー
  const getCurrentQuestions = () => {
    try {
      // eslint-disable-next-line no-undef
      return typeof currentQuestions !== 'undefined' ? currentQuestions : (Array.isArray(window.currentQuestions) ? window.currentQuestions : []);
    } catch (e) {
      return Array.isArray(window.currentQuestions) ? window.currentQuestions : [];
    }
  };
  const setCurrentQuestions = (value) => {
    try {
      // eslint-disable-next-line no-undef
      if (typeof currentQuestions !== 'undefined') {
        // eslint-disable-next-line no-undef
        currentQuestions = value;
        return;
      }
    } catch (e) {
      /* noop */
    }
    window.currentQuestions = value;
  };
  const getUserAnswers = () => {
    try {
      // eslint-disable-next-line no-undef
      return typeof userAnswers !== 'undefined' ? userAnswers : (Array.isArray(window.userAnswers) ? window.userAnswers : []);
    } catch (e) {
      return Array.isArray(window.userAnswers) ? window.userAnswers : [];
    }
  };
  const setUserAnswers = (value) => {
    try {
      // eslint-disable-next-line no-undef
      if (typeof userAnswers !== 'undefined') {
        // eslint-disable-next-line no-undef
        userAnswers = value;
        return;
      }
    } catch (e) {
      /* noop */
    }
    window.userAnswers = value;
  };
  const getCurrentIndex = () => {
    try {
      // eslint-disable-next-line no-undef
      return typeof currentQuestionIndex !== 'undefined'
        ? currentQuestionIndex
        : (typeof window.currentQuestionIndex === 'number' ? window.currentQuestionIndex : 0);
    } catch (e) {
      return typeof window.currentQuestionIndex === 'number' ? window.currentQuestionIndex : 0;
    }
  };
  const setCurrentIndex = (value) => {
    try {
      // eslint-disable-next-line no-undef
      if (typeof currentQuestionIndex !== 'undefined') {
        // eslint-disable-next-line no-undef
        currentQuestionIndex = value;
        return;
      }
    } catch (e) {
      /* noop */
    }
    window.currentQuestionIndex = value;
  };
  const setCorrectAnswers = (value) => {
    try {
      // eslint-disable-next-line no-undef
      if (typeof correctAnswers !== 'undefined') {
        // eslint-disable-next-line no-undef
        correctAnswers = value;
        return;
      }
    } catch (e) {
      /* noop */
    }
    window.correctAnswers = value;
  };
  const getIsSubmitting = () => {
    try {
      // eslint-disable-next-line no-undef
      return typeof isSubmitting !== 'undefined'
        ? isSubmitting
        : (typeof window.isSubmitting === 'boolean' ? window.isSubmitting : false);
    } catch (e) {
      return typeof window.isSubmitting === 'boolean' ? window.isSubmitting : false;
    }
  };
  const setIsSubmitting = (value) => {
    try {
      // eslint-disable-next-line no-undef
      if (typeof isSubmitting !== 'undefined') {
        // eslint-disable-next-line no-undef
        isSubmitting = value;
        return;
      }
    } catch (e) {
      /* noop */
    }
    window.isSubmitting = value;
  };

  function injectModalStyle() {
    if (document.getElementById('rg-persistence-style')) return;
    const style = document.createElement('style');
    style.id = 'rg-persistence-style';
    style.textContent = `
      .rg-modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.45);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 16px;
      }
      .rg-modal {
        background: #ffffff;
        border-radius: 12px;
        padding: 20px;
        max-width: 360px;
        width: 100%;
        box-shadow: 0 10px 30px rgba(0,0,0,0.16);
        font-family: "Noto Sans JP", sans-serif;
        color: #2D3748;
      }
      .rg-modal h3 {
        font-size: 18px;
        margin-bottom: 12px;
        color: #07A2B8;
      }
      .rg-modal p {
        font-size: 14px;
        margin-bottom: 16px;
        line-height: 1.6;
      }
      .rg-modal-actions {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
      }
      .rg-modal button {
        border: none;
        border-radius: 8px;
        padding: 10px 14px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.1s ease;
      }
      .rg-modal .rg-restore {
        background: linear-gradient(135deg, #07A2B8 0%, #057a8c 100%);
        color: #fff;
      }
      .rg-modal .rg-discard {
        background: #E2E8F0;
        color: #1A202C;
      }
      .rg-modal button:hover {
        transform: translateY(-1px);
      }
    `;
    document.head.appendChild(style);
  }

  function initPersistence() {
    const chapterId = document.body?.dataset?.chapterId;
    if (!chapterId) {
      log('chapterId が見つかりません');
      return;
    }

    const testPart = document.body?.dataset?.testPart || 'full';
    const storageKey = `engsite:v1:test:${chapterId}:${testPart}`;
    const elements = {
      nameScreen: document.getElementById('name-screen'),
      questionScreen: document.getElementById('question-screen'),
      reviewScreen: document.getElementById('review-screen'),
      resultScreen: document.getElementById('result-screen'),
      progressBar: document.getElementById('progress-bar'),
      fullnameInput: document.getElementById('fullname'),
      answerInput: document.getElementById('answer-input'),
      startButton: document.getElementById('start-button'),
      nextButton: document.getElementById('next-button'),
      finishReviewButton: document.getElementById('finish-review-button'),
      restartButton: document.getElementById('restart-button'),
      submitButton: document.getElementById('submit-button'),
      reviewList: document.getElementById('review-list'),
      submissionStatus: document.getElementById('submission-status')
    };

    const state = { isRestoring: false, hasStarted: false, submissionDone: false };

    const detectStage = () => {
      if (isVisible(elements.resultScreen)) return 'result';
      if (isVisible(elements.reviewScreen)) return 'review';
      if (isVisible(elements.questionScreen)) return 'question';
      return 'name';
    };

    const collectData = () => {
      const now = Date.now();
      const answersObj = {};
      const answers = getUserAnswers();
      answers.forEach((text, idx) => {
        answersObj[`q${idx}`] = { text: text || '', updatedAt: now };
      });

      const questions = getCurrentQuestions();
      const idx = getCurrentIndex();

      return {
        schemaVersion: 1,
        updatedAt: now,
        chapterId,
        testPart,
        fullName: elements.fullnameInput ? elements.fullnameInput.value || '' : '',
        answers: answersObj,
        progress: {
          stage: detectStage(),
          currentStep: clamp(idx, 0, questions.length)
        },
        questions
      };
    };

    const saveAttempt = (reason) => {
      if (state.isRestoring) {
        log('restoring中のため保存スキップ', reason);
        return;
      }
      // 送信完了後は保存しない
      if (state.submissionDone) {
        log('submissionDone のため保存スキップ', reason);
        return;
      }
      // テスト未開始（氏名入力のみ・問題未表示）の場合は保存しない
      if (!state.hasStarted) {
        log('hasStarted=false のため保存スキップ', reason);
        return;
      }
      try {
        const payload = collectData();
        localStorage.setItem(storageKey, JSON.stringify(payload));
        log('保存しました', reason, payload);
      } catch (e) {
        console.error('保存に失敗しました', e);
      }
    };

    const clearStorage = () => {
      try {
        localStorage.removeItem(storageKey);
        log('ストレージを削除しました');
      } catch (e) {
        console.error('ストレージ削除に失敗しました', e);
      }
    };

    const resetToInitial = () => {
      try {
        setCurrentIndex(0);
        setCorrectAnswers(0);
        setCurrentQuestions([]);
        setUserAnswers([]);
        state.submissionDone = false;
        if (elements.fullnameInput) elements.fullnameInput.value = '';
        if (elements.answerInput) elements.answerInput.value = '';
        if (elements.progressBar) elements.progressBar.style.width = '0%';
        if (elements.nameScreen) elements.nameScreen.style.display = 'flex';
        if (elements.questionScreen) elements.questionScreen.style.display = 'none';
        if (elements.reviewScreen) elements.reviewScreen.style.display = 'none';
        if (elements.resultScreen) elements.resultScreen.style.display = 'none';
      } catch (e) {
        console.error('初期化に失敗しました', e);
      }
    };

    const applyAnswers = (answersObj) => {
      const total = getCurrentQuestions().length;
      const nextAnswers = new Array(total).fill('');
      if (answersObj) {
        Object.keys(answersObj).forEach((key) => {
          const idx = parseInt(key.replace(/\D+/g, ''), 10);
          if (!Number.isNaN(idx) && idx < total) {
            nextAnswers[idx] = answersObj[key]?.text || '';
          }
        });
      }
      setUserAnswers(nextAnswers);
    };

    const loadSaved = () => {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return null;
      try {
        const parsed = JSON.parse(raw);
        if (parsed.schemaVersion !== 1) return null;
        if (parsed.chapterId !== chapterId) return null;
        if (parsed.testPart !== testPart) return null;
        return parsed;
      } catch (e) {
        console.error('保存データが壊れています。削除します。', e);
        localStorage.removeItem(storageKey);
        return null;
      }
    };

    const handleRestore = (saved) => {
      state.isRestoring = true;
      try {
        if (elements.fullnameInput) {
          elements.fullnameInput.value = saved.fullName || '';
        }

        if (Array.isArray(saved.questions) && saved.questions.length > 0) {
          setCurrentQuestions(saved.questions);
        } else if (typeof window.prepareQuestions === 'function') {
          window.prepareQuestions('all');
          setCurrentQuestions(getCurrentQuestions());
        }

        applyAnswers(saved.answers);

        const progress = saved.progress || {};
        const stage = progress.stage || 'question';
        const total = getCurrentQuestions().length;
        setCurrentIndex(clamp(progress.currentStep || 0, 0, total));

        if (stage === 'name') {
          resetToInitial();
        } else if (stage === 'question') {
          if (elements.nameScreen) elements.nameScreen.style.display = 'none';
          if (elements.questionScreen) elements.questionScreen.style.display = 'flex';
          if (elements.reviewScreen) elements.reviewScreen.style.display = 'none';
          if (elements.resultScreen) elements.resultScreen.style.display = 'none';
          if (typeof window.updateProgressBar === 'function') window.updateProgressBar();
          if (typeof window.showQuestion === 'function') window.showQuestion(getCurrentIndex());
        } else if (stage === 'review') {
          setCurrentIndex(total);
          if (elements.nameScreen) elements.nameScreen.style.display = 'none';
          if (elements.questionScreen) elements.questionScreen.style.display = 'none';
          if (elements.reviewScreen) elements.reviewScreen.style.display = 'flex';
          if (elements.resultScreen) elements.resultScreen.style.display = 'none';
          if (elements.progressBar) elements.progressBar.style.width = '100%';
          if (typeof window.showReviewScreen === 'function') window.showReviewScreen();
        } else if (stage === 'result') {
          if (elements.nameScreen) elements.nameScreen.style.display = 'none';
          if (elements.questionScreen) elements.questionScreen.style.display = 'none';
          if (elements.reviewScreen) elements.reviewScreen.style.display = 'none';
          if (elements.resultScreen) elements.resultScreen.style.display = 'flex';
          if (typeof window.showResults === 'function') window.showResults();
        }

        // 復元後は開始済みとして扱う
        state.hasStarted = stage !== 'name';
        state.submissionDone = false;

        log('復元が完了しました', saved);
      } catch (e) {
        console.error('復元に失敗しました。データを削除します。', e);
        clearStorage();
        resetToInitial();
      } finally {
        state.isRestoring = false;
        saveAttempt('restored');
      }
    };

    const showRestoreModal = (saved) => {
      injectModalStyle();
      const overlay = document.createElement('div');
      overlay.className = 'rg-modal-overlay';
      overlay.innerHTML = `
        <div class="rg-modal" role="dialog" aria-modal="true">
          <h3>前回の続きがあります</h3>
          <p>途中までの回答と進捗を復元しますか？</p>
          <div class="rg-modal-actions">
            <button type="button" class="rg-discard" data-action="discard">破棄する</button>
            <button type="button" class="rg-restore" data-action="restore">復元する</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      const close = () => {
        if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
      };

      overlay.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const action = target.dataset.action;
        if (action === 'restore') {
          close();
          handleRestore(saved);
        } else if (action === 'discard') {
          clearStorage();
          resetToInitial();
          close();
        }
      });
    };

    // イベント設定
    const debounceSave = debounce(() => saveAttempt('input'), DEBOUNCE_MS);

    if (elements.fullnameInput) {
      elements.fullnameInput.addEventListener('input', debounceSave);
    }
    if (elements.answerInput) {
      elements.answerInput.addEventListener('input', debounceSave);
    }

    if (elements.nextButton) {
      elements.nextButton.addEventListener('click', () => setTimeout(() => saveAttempt('next'), 0));
    }
    if (elements.startButton) {
      elements.startButton.addEventListener('click', () => {
        // 1問目が表示されたタイミングで保存を開始（氏名未入力で弾かれた場合は開始しない）
        setTimeout(() => {
          const questions = getCurrentQuestions();
          const stage = detectStage();
          if (questions.length > 0 && stage !== 'name') {
            state.hasStarted = true;
            state.submissionDone = false;
            saveAttempt('start');
          }
        }, 0);
      });
    }
    if (elements.finishReviewButton) {
      elements.finishReviewButton.addEventListener('click', () => setTimeout(() => saveAttempt('finish-review'), 0));
    }
    if (elements.restartButton) {
      elements.restartButton.addEventListener('click', () => {
        clearStorage();
        state.submissionDone = false;
        setTimeout(() => saveAttempt('restart'), 0);
      });
    }

    if (elements.reviewList) {
      elements.reviewList.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        if (target.classList.contains('save-edit-button')) {
          setTimeout(() => saveAttempt('review-edit'), 0);
        }
      });
    }

    window.addEventListener('beforeunload', () => {
      saveAttempt('beforeunload');
    });

    // submitResults を差し替え（成功時に localStorage を削除）
    const overrideSubmit = () => {
      if (!elements.submitButton || !window.submitResults) return;
      const originalSubmit = window.submitResults;
      elements.submitButton.removeEventListener('click', originalSubmit);

      window.submitResults = async function enhancedSubmit() {
        if (getIsSubmitting()) return;
        setIsSubmitting(true);
        elements.submitButton.disabled = true;

        if (elements.submissionStatus) {
          elements.submissionStatus.style.display = 'block';
          elements.submissionStatus.innerHTML = `
            <div>
              <p>送信中です。数秒お待ちください。</p>
              <p class="submission-warning">⚠「結果を提出」を連打しないでください。</p>
            </div>
          `;
        }

        const answersData = [];
        const questions = getCurrentQuestions();
        const answers = getUserAnswers();
        for (let i = 0; i < questions.length; i++) {
          answersData.push({
            user: answers[i] ? answers[i].trim() : '',
            correct: questions[i]?.english?.trim() || '',
            japanese: questions[i]?.japanese || ''
          });
        }

        const testTitleElement = document.getElementById('test-title');
        const testTitle = testTitleElement ? testTitleElement.textContent : '';
        const gasWebAppURL = 'https://script.google.com/macros/s/AKfycby22oH6WDDAV1HkhLEixncUDVV213t17F-nLLPiCopBKf9kYsDkLbxYnqjCULPr7cKm/exec';

        const formData = new FormData();
        formData.append('name', elements.fullnameInput ? elements.fullnameInput.value : '');
        formData.append('timestamp', new Date().toLocaleString());
        formData.append('testTitle', testTitle);
        formData.append('answers', JSON.stringify(answersData));

        let timeoutId;
        try {
          const controller = new AbortController();
          timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

          await fetch(gasWebAppURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          // fetch が catch に入らなければ成功扱い（ステータス/JSONは不問）
          if (elements.submissionStatus) {
            elements.submissionStatus.innerHTML = `
              <div>
                <p class="submission-success">結果を記録しました。</p>
              </div>
            `;
          }
          state.submissionDone = true;
          state.hasStarted = false;
          clearStorage();
        } catch (error) {
          if (timeoutId) clearTimeout(timeoutId);
          console.error('送信エラー:', error);
          if (elements.submissionStatus) {
            elements.submissionStatus.innerHTML = `
              <div>
                <p style="color: var(--error);">送信中にエラーが発生しました。再試行してください。</p>
              </div>
            `;
          }
        } finally {
          setTimeout(() => {
            elements.submitButton.disabled = false;
            setIsSubmitting(false);
          }, 3000);
        }
      };

      elements.submitButton.addEventListener('click', window.submitResults);
    };

    const saved = loadSaved();
    const hasMeaningfulData =
      saved &&
      saved.progress &&
      saved.progress.stage &&
      saved.progress.stage !== 'name' &&
      Array.isArray(saved.questions) &&
      saved.questions.length > 0;

    if (hasMeaningfulData) {
      showRestoreModal(saved);
    } else if (saved) {
      // 無効なデータは削除
      clearStorage();
    }

    overrideSubmit();

    // デバッグ用にキーと保存内容をログ出力
    log('storageKey', storageKey, 'saved', saved);
  }

  document.addEventListener('DOMContentLoaded', initPersistence, { once: true });
})();
