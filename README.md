# Restaurant Reviews Web Application

A responsive restaurant review platform with search, user-authored reviews, and location integration via Google Maps.

사용자가 레스토랑을 검색하고 리뷰를 작성하거나 확인할 수 있는 웹 서비스입니다. Google Maps를 통해 각 음식점의 위치도 확인할 수 있습니다.

## 💡 Overview

Users can discover and review restaurants using flexible filters such as name, zip code, and cuisine. <br />
Only review owners can edit or delete content, and each restaurant includes a Google Maps location link.

사용자는 이름, 우편번호, 음식 종류로 레스토랑을 필터링하여 검색할 수 있으며, 각 레스토랑에 대한 리뷰를 작성하거나 다른 사용자의 리뷰를 확인할 수 있습니다. <br />
작성자 본인만 리뷰를 수정하거나 삭제할 수 있도록 권한 제어 기능이 구현되어 있고, 각 레스토랑은 Google Maps 링크를 통해 위치를 확인할 수 있습니다.

## 👤 User Features

- Browse and filter restaurants by name, zip, or cuisine <br />
  레스토랑을 이름, 우편번호, 음식 종류로 필터링하여 검색
- View reviews & create new ones (with ownership-based edit/delete) <br />
  리뷰 조회 및 작성 (작성자 본인만 수정/삭제 가능)
- Click “View Map” to see exact location in Google Maps <br />
  "View Map" 버튼으로 Google Maps에서 상세 위치 확인
- Responsive layout with card-style UI and pagination <br />
  카드형 UI와 페이지네이션을 적용한 반응형 레이아웃

## 🛠 Backend Highlights

- MVC architecture for modular backend design <br />
  모듈화된 백엔드 설계를 위한 MVC 아키텍처 적용
- Clear separation of DAO (Data Access Object) & Controllers <br />
  DAO(Data Access Object)와 Controller의 명확한 분리
- MongoDB NoSQL structure for flexible data modeling <br />
  유연한 데이터 모델링을 위한 MongoDB NoSQL 구조 사용

## 🖼 Screenshots

<details>
<summary>Click to view</summary>

![Main Page](/frontend/public/assets/main_page.png)  
![Search Results](/frontend/public/assets/searching.png)  
![Create Review](/frontend/public/assets/create_review_page.png)  
![Review Page](/frontend/public/assets/review_page.png)

</details>

## 🧰 Tech Stack

| Category     | Tech                |
| ------------ | ------------------- |
| Frontend     | React.js, Bootstrap |
| Backend      | Node.js, Express.js |
| Database     | MongoDB             |
| Architecture | MVC, DAO pattern    |
