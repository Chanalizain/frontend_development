function Time() {
    let date = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    return(
        <h2>
            {date}
        </h2>
    );
}

export default Time;