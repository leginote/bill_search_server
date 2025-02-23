# Bill Search API

## 참고

- [Nestia](https://github.com/samchon/nestia)
- [Nestia-Start](https://github.com/samchon/nestia-start)

## How to use

.npmrc 파일 생성
```
@leginote:registry=https://npm.pkg.github.com
```

설치
```bash
npm install @leginote/bill-search-api
```

사용
```typescript
const connection = { host: "https://bill-search-api.leginote.com" };
```

목업 데이터 받을 때, 여기서 host는 uri기만 하면 됨
```typescript
const connection = { simulate: true, host: "http://localhost:3000" };
// return mock data
```
