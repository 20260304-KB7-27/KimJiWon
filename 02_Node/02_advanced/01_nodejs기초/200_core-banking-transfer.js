/* ============================================================
    아래에 제공된 3개의 가상 뉴스 API 호출 함수
    (fetchITNews, fetchEconomyNews, fetchGlobalNews)를 활용하여,
    메인 스크래핑 함수인 gatherAllNews()를 완성해 주세요.
============================================================ */

// 가상의 뉴스 API 호출 함수들
const fetchITNews = () => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(['AI 기술 동향', '새로운 웹 프레임워크 출시']),
      1000,
    );
  });
};

const fetchEconomyNews = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject(new Error('경제 뉴스 서버 응답 지연'));
      resolve(['기준 금리 인상 발표', 'IT 주식 시장 분석']);
    }, 800);
  });
};

const fetchGlobalNews = () => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(['글로벌 빅테크 실적', '해외 스타트업 투자 현황']),
      1200,
    );
  });
};

const gatherAllNews = async () => {
  console.log('뉴스 스크래핑을 시작합니다...\n');

  // 1. try...catch 블록을 작성하세요.
  // 2. Promise.all을 사용해 위 3개 함수의 결과를 동시에 기다리세요.
  // 3. 결과를 콘솔에 출력하세요.

  try {
    const result = await Promise.all([
      fetchITNews(),
      fetchEconomyNews(),
      fetchGlobalNews(),
    ]);

    const allNewsList = result.flat();

    console.log(allNewsList);
  } catch (error) {
    console.error(
      '[스크래핑 에러] 데이터를 불러오는 데 실패햇습니다 : ',
      error,
    );
  }
};

// 함수 실행
gatherAllNews();
