function resolvedPromise(){

  return new Promise((res, rej) => {

    setTimeout(res({ message: "delayed success" }), 500);

  });
}

function rejectPromise(){
  return new Promise((res, rej) => {

    setTimeout(rej({ error: "delayed exception" }), 500);
    
  });
}

resolvedPromise().then((message) => console.log(message));
rejectPromise().catch((message) => console.error(message));


