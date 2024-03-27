const handler = async function (event) {
    // function code here
  
    // for now just reply success
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        msg: "Message sent successfully",
      }),
    };
  };
  
  export { handler };