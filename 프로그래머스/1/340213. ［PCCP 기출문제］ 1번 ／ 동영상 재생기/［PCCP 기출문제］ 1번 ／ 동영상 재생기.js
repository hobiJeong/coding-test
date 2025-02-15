function solution(video_len, pos, op_start, op_end, commands) {
  class VideoPlayer {
    videoLenMinutes;
    videoLenSeconds;
    pos;
    opStart;
    opEnd;
    maxSeconds = 60;
    minSeconds = 0;

    secondsMovedByCommand = 10;

    executeCommand(command) {
      let [posMinutes, posSeconds] = this.parseMinutesAndSeconds(this.pos);

      if (command === "next") {
        posSeconds += this.secondsMovedByCommand;

        if (
          posMinutes === this.videoLenMinutes &&
          posSeconds > this.videoLenSeconds
        ) {
          posSeconds = this.videoLenSeconds;
        }

        if (posSeconds >= this.maxSeconds) {
          if (posMinutes < this.videoLenMinutes) {
            posSeconds -= this.maxSeconds;
            posMinutes++;

            if (
              posMinutes === this.videoLenMinutes &&
              posSeconds > this.videoLenSeconds
            ) {
              posSeconds = this.videoLenSeconds;
            }
          } else if (posSeconds > this.videoLenSeconds) {
            posSeconds = this.videoLenSeconds;
          }
        }
      }

      if (command === "prev") {
        posSeconds -= this.secondsMovedByCommand;

        if (posSeconds < this.minSeconds) {
          if (posMinutes > 0) {
            posSeconds += this.maxSeconds;
            posMinutes--;
          } else {
            posSeconds = 0;
          }
        }
      }

      this.pos = this.transformToTimeStr(posMinutes, posSeconds);

      this.skipOpening();
    }

    skipOpening() {
      const [posMinutes, posSeconds] = this.parseMinutesAndSeconds(this.pos);
      const [opStartMinutes, opStartSeconds] = this.parseMinutesAndSeconds(
        this.opStart
      );
      const [opEndMinutes, opEndSeconds] = this.parseMinutesAndSeconds(
        this.opEnd
      );

      if (
        (opStartMinutes < posMinutes ||
          (opStartMinutes === posMinutes && opStartSeconds <= posSeconds)) &&
        (opEndMinutes > posMinutes ||
          (opEndMinutes === posMinutes && opEndSeconds >= posSeconds))
      ) {
        this.pos = this.transformToTimeStr(opEndMinutes, opEndSeconds);
      }
    }

    transformToTimeStr(minutes, seconds) {
      const minutesStr = String(minutes);
      const secondsStr = String(seconds);

      return `${minutesStr.length === 1 ? "0" + minutesStr : minutesStr}:${
        secondsStr.length === 1 ? "0" + secondsStr : secondsStr
      }`;
    }

    parseMinutesAndSeconds(timeStr) {
      const [minutes, seconds] = timeStr.split(":");

      return [Number(minutes), Number(seconds)];
    }

    constructor(videoLen, pos, opStart, opEnd) {
      const [videoLenMinutes, videoLenSeconds] =
        this.parseMinutesAndSeconds(videoLen);

      this.videoLenMinutes = videoLenMinutes;
      this.videoLenSeconds = videoLenSeconds;
      this.pos = pos;
      this.opEnd = opEnd;
      this.opStart = opStart;

      this.skipOpening();
    }
  }

  const videoPlayer = new VideoPlayer(video_len, pos, op_start, op_end);

  commands.forEach((command) => videoPlayer.executeCommand(command));

  return videoPlayer.pos;
}