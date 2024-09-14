# js-random-nickname-generator
랜덤으로 닉네임을 만들어주는 코드

## 사용법
```
fetch('https://raw.githubusercontent.com/kevalsil/js-random-nickname-generator/main/randomNicknameGenerator.js')
    .then(response => response.text())
    .then(scriptContent => {
        eval(scriptContent);
        console.log(getRandomNickname());
    })
    .catch(error => console.error('닉네임 생성기 가져오기 오류:', error));
```

getRandomNickname()에서 닉네임이 리턴된다.
