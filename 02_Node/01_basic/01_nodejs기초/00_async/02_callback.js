/*
  택배 배송 정보 확인하려면
  1. 로그인
  2. 사용자 정보
  3. 주문 내역
  4. 택배의 상태
  위 4개의 API 불러와야 하는 경우

  => 이전의 정보가 있어야 다음 정보를 가져올 수 있는 상황 가정 
*/

// 로그인 API (가정)
function login(userId, callback) {
  setTimeout(() => {
    console.log('로그인 성공');
    callback({ userId: userId });
  }, 1000);
}

// 사용자 정보 조회 API (가정)
function getUserInfo(user, callback) {
  setTimeout(() => {
    console.log('사용자 정보 조회 완료');
    callback({ userId: user.userId, name: 'kim' });
  }, 1000);
}

// 주문 조회 API (가정)
function getOrders(user, callback) {
  setTimeout(() => {
    console.log('주문 목록 조회 완료');
    callback([{ orderId: 1 }, { orderId: 2 }]);
  }, 1000);
}

// 배송 조회 API (가정)
function getDelivery(order, callback) {
  setTimeout(() => {
    console.log('배송 상태 조회 완료');
    callback({ orderId: order.orderId, status: '배송중' });
  }, 1000);
}

/*
  비동기 처리
  login -> userinfo -> orders -> delivery 
  가독성 안좋고 유지보수 힘듦
*/
login('userid', function (user) {
  getUserInfo(user, function (userInfo) {
    getOrders(userInfo, function (orders) {
      getDelivery(orders[0], function (delivery) {
        console.log('최종 배송 상태 : ', delivery.status);
      });
    });
  });
});
