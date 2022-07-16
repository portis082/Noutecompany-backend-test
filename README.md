# **Noutecompany 백엔드 코딩 테스트**



## **Tip : "정답"은 없습니다! 좋은 개발습관이나 아키텍쳐면 충분합니다 :) <br> <br> 사용하지 않는 코드에 관해서는 주석 처리를 반드시 해주세요!**





### **첫 번째**


> * node 기반의 어떠한 프레임워크를 사용하셔도 됩니다. (Typescript를 사용하시면 더 좋습니다.)


> * 어떠한 라이브러리를 사용하셔도 괜찮습니다!



### **두 번째**

PORT = 3000으로 진행했습니다. 각각에 해당하는 엔드포인트를 적었습니다.

> * 전체 상품 목록을 얻을 수 있습니다.

GET /

> * 특정 카테고리별로 상품을 얻을 수 있습니다. (type으로 항목을 식별합니다.)

GET /items/:type
(ex /items/brush)

> * 각 카테고리별 상품을 1가지씩 랜덤으로 얻을 수 있습니다. (각 상품은 객체에 담아 보내주세요.)

GET /randomitems

> * 판매된 상품들 중 여성(female) 회원에게 판매된 횟수가 가장 많은 상품의 이름을 얻을 수 있습니다.

GET /bestsales

> * 3월 판매 총액이 가장 높은 상품을 얻을 수 있습니다. (상품은 객체에 담아 보내주세요.)

GET /popularity

> * 구매 횟수가 가장 적은 회원과, 구매 총액이 가장 높은 회원의 이름을 각각 얻을 수 있습니다. (두 가지 조건에 해당하는 회원이 동일한 회원이라면, 해당 회원의 이름을 보내주세요.)

GET /analysis

### **마지막**

> * 해당 과제를 담은 레퍼지토리 주소를 보내주세요 :)


> * README에 해당 질문에 대한 답변을 함께 적어주세요!


> * 테스트를 진행하시면서 개선되어야 할 점이 무엇이라고 생각하시나요?

아웃 풋에 대한 설명이 모호한 부분이 있었습니다. 결과값이 다수의 물건이나 사람일때 처리하는 방법에 대해서 좀더 구체적이면 좋을 것 같습니다. 일단 메일을 받은 시점을 테스트 시작 일시로 생각했는데 이 부분에 대한 언급이 없었던 점이 아쉬웠습니다.  

> * 테스트를 진행하시면서 어떤 부분이 가장 까다로우셨나요?

엔드포인트와 각각 파일, 변수에 대한 네이밍 부분이 가장 까다롭게 느꼈습니다. 이름을 짓는 것은 다른 사람이 보더라도 어느 정도 유추할 수 있고 직관적이어야 하는데 이 부분이 머릿 속에 바로 떠오르지 않아서 힘들었습니다.

> * 테스트 코드에서 가장 자신있는 부분은 어디인가요?

데이터를 json파일에서 읽어서 서버에서 처리하고 응답하는 로직 부분이 가장 자신있었습니다. 백엔드 엔지니어의 가장 중요한 부분은 서버 처리에 들어가는 리소스를 최소화 하는 것이기 때문에 로직에 대해서 자신있습니다.




