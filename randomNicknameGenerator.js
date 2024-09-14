function getRandomNickname() {
    const adjectives = [
        '멋진', '이상한', '쾌활한', '귀여운', '신비한', '빠른', '용감한', '미래적인', '어두운', '빛나는'
    ];
    
    const nouns = [
        '달팽이', '스마트폰', '리모컨', '자동차', '게임기', '책', '열쇠', '인형', '로봇', '모자'
    ];
    
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${randomAdjective} ${randomNoun}`;
}

// 사용 예제
console.log(getRandomNickname());
