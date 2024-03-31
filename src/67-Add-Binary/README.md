## Description
### Complex
Time complex: O(max(m,n))

Space complex: O(1)

### Solution 1
BigInt를 이용해서 binary값으로 인식하게 하고 두값을 더함

더한 값은 BigInt 타입이라 이걸 다시 string으로 변경해야하기에 toString을 사용

이때 다시 binary로 변경해야하니 2값을 넣어 radix를 변경

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

