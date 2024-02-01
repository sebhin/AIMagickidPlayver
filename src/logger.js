const initializeGlobalErrorHandler = () => {
    window.onerror = function (message, source, lineno, colno, error) {
        const logData = {
          message: message, // 오류 메시지
          source: source,   // 오류가 발생한 파일의 URL
          lineno: lineno,   // 오류가 발생한 줄 번호
          colno: colno,     // 오류가 발생한 열 번호
          stack: error && error.stack, // 오류 스택 트레이스
          url: window.location.href,   // 현재 페이지의 URL
          timestamp: new Date().toISOString() // 오류가 발생한 시간
        };
      
        // 로그 데이터를 서버로 전송
        fetch('/error', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logData),
        });
      
        return false; // 기본 오류 핸들러를 실행하지 않음
      };

      window.onunhandledrejection = function(event) {
        const logData = {
          message: event.reason.message || 'Unhandled promise rejection',
          stack: event.reason.stack || 'No stack trace',
          url: window.location.href,
          timestamp: new Date().toISOString()
        };
      
        fetch('/error', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logData),
        });
      };
  };
  
export default initializeGlobalErrorHandler;