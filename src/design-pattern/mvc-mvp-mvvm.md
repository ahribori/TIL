# MVC, MVP, MVVM
모던 프론트엔드 프레임워크에서 자주 언급되는 세 가지 패턴의 특징을 정리한다.
정답은 없다. 왜냐하면, 모델과 뷰가 서로 어떤 방향으로 의존성을 가져야 하는지 명확히 정의된 표준이 없기 때문이다.
상황에 맞게, 서로의 의존성과 결합도를 낮추는 방향으로 최선의 선택을 하려는 노력을 하면 된다.

> 무슨 패턴을 쓰던 제일 중요한 핵심은 Model과 View의 의존성과 결합도를 낮추는 것이다.

## 1. MVC (Model-View-Controller)
Controller는 모든 입력을 처리한다. 입력을 처리할 Model을 선택하고, 결과에 따라 View를 선택한다.
Model과 View가 클럽에 온 남녀이고 Controller는 이들을 부킹해주는 웨이터라는 비유를 검색하다가 봤는데 정말 이해가 잘 되는 것 같다ㅋㅋ

어쨌든 Controller는 Model을 선택하고 View를 선택하지만 View를 직접 업데이트 하지는 않는다.
View에 Model의 변경사항을 반영하는 경우의 수는 다음과 같은데,
- View가 Model을 직접 사용해서 업데이트
- Model이 자신의 변경사항을 View에게 notify 해서 업데이트
- View가 Model을 polling하다가 변경되면 업데이트

이 때문에 View와 Model은 필연적으로 어느정도 의존성을 갖게 된다.

## 2. MVP (Model-View-Presenter)

MVC의 Controller가 Presenter로 대체된 패턴이다.
모든 입력은 Controller가 없기 때문에 View가 받는다. View가 이벤트를 Presenter에게 전달하면
해당 이벤트에 맞는 Model을 조작하고 그 결과를 다시 View에 바인딩하여 View를 업데이트한다.
MVC와의 가장 큰 차이가 여기에 있다.
MVC에서는 View를 업데이트할 때 Model과 View가 서로 상호작용을 하지만, MVP에서는 Presenter가
View와 Model의 인스턴스를 모두 가지고 있으며 Model에 변화가 있으면 View를 업데이트한다.
따라서 Model과 View의 의존성은 완전히 없어졌지만, View와 Presenter가 1:1 관계를 가지게 된다.
Presenter의 구현체는 Model보다 View에 가깝다.

정리해보면,

- 입력을 Controller가 아닌 View가 받음
- Model의 변화에 따른 View의 업데이트를 Presenter가 담당
- View와 Model의 의존관계가 없어짐
- View와 Presenter의 의존관계가 생김


## 3. MVVM (Model-View-ViewModel)

Controller와 Presenter의 위치에 ViewModel이 들어왔다.

MVP와 마찬가지로 모든 입력은 View가 받는다.
View에 입력이 들어오면 Command 패턴으로 ViewModel에 Model에서 데이터를 가져오라고 명령을 한다.
ViewModel은 명령받은대로 Model에 필요한 데이터를 요청한다.
Model은 ViewModel에게 요청받은 데이터를 응답한다.
ViewModel은 응답받은 데이터를 가공하고 저장한다.
View는 ViewModel과의 데이터 바인딩으로 인해 자동으로 업데이트된다.

Presenter는 View와 1:1 결합을 하고 있지만, MVVM은 다수의 View가 하나의 ViewModel을 바라보고 있다.


> 참조 : http://blog.javarouka.me/2013/06/understanding-mvc-mvp-and-mvvm.html