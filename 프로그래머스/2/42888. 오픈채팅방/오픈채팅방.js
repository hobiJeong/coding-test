function solution(record) {
  const uidName = {};
  const result = [];

  for (let str of record) {
    let recordArr = str.split(' ');
    switch (recordArr[0]) {
      case 'Enter':
        result.push(`${recordArr[1]}님이 들어왔습니다.`);
        uidName[recordArr[1]] = recordArr[2];
        break;
      case 'Leave':
        result.push(`${recordArr[1]}님이 나갔습니다.`);
        break;
      case 'Change':
        uidName[recordArr[1]] = recordArr[2];
        break;
    }
  }

  for (let i = 0; i < result.length; i++) {
    const uid = result[i].split('님')[0];
    if (uidName[uid]) {
      result[i] = result[i].replace(uid, uidName[uid]);
    }
  }

  return result;
}