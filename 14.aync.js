console.log("start");

// setTimeOut

//* setTimeout(task,timer(ms)/delay,a,sb,....)
// const timer_id =  setTimeout(function(user_id,name){
//   console.log("processing",user_id,name); //
// }, 1000, 1, "anc");

// // clear timer
// clearTimeout(timer_id)

// console.log(timer_id)

// setInterval(task , interval )

// let count = 0;
// const id = setInterval(function () {
//   count++;
//   console.log(count);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);
console.log("end");

//

const getUser = (user_id, callback) => {
  setTimeout(() => {
    const user = { id: user_id, name: "John Doe" };

    console.log("user fetched", user);
    callback('user fetching error',user);
  }, 1000);
};

const getOders = (user, callback) => {
  setTimeout(() => {
    const orders = [
      { id: 1, user_id: user.id, total_amt: 100, product_id: 2 },
      { id: 1, user_id: user.id, total_amt: 1000, product_id: 8 },
    ];
    console.log("orders", orders);

    callback(null,orders);
  }, 2000);
};

const getOderDetail = (order) => {
  setTimeout(() => {
    const orders = {
      id: order.id,
      total_amt: order.total_amt,
    };
    console.log("order details", orders);
    callback(null, orders);
  }, 1000);
};

// getUser(100);
// getOders({ id: 100 });
// getOderDetail({ id: 1, user_id: 1, total_amt: 100, product_id: 2 });

getUser(1, (err, user) => {
  if (err) {
    console.log(err);
    return;
  }
  getOders(user, (err, orders) => {
    if (err) {
      console.log(err);
      return;
    }

    getOderDetail(orders[0], (err, order) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("final result");
      console.log(order);
    });
  });
});

// call hell

// pyramid of doom

// promises
// async await s