# FBD Editor (Function Block Diagram Editor)

Vue 3와 Vue Flow, Vite를 사용하여 구축된 웹 기반 **FBD(Function Block Diagram) 에디터**입니다.

## 주요 기능

1. **FBD 다이어그램 편집**:
   - 마우스 드래그 앤 드롭 방식을 이용한 펑션 블록(FB), 입력(Input), 상수(Constant) 노드 생성 및 연결선 편집
   - 복사/붙여넣기(Ctrl+C, Ctrl+V) 및 삭제(Delete) 단축키 지원
   - 사용자 정의 펑션 블록(UDFB) 생성 기능

2. **실시간 모니터링**:
   - MQTT(WebSocket 브로커) 연결을 통해 제어기(Raspberry Pi 등)로부터 전송받는 실시간 계측값을 펑션 블록 입출력 포트에 시각화

3. **다이어그램 유효성 검증 (FBD 검증)**:
   - 노드 ID 중복 검사
   - 입력 및 상수의 포맷 유효성 체크
   - 왼쪽 상단 제어기 메타 정보(`Inst`, `Name`, `Period`, `RD`) 필수 기입 여부 검증
   - 펑션 블록의 포트 누락 및 다중 연결 검사

4. **저장 및 메타 데이터 내보내기**:
   - FBD 데이터 파일 저장 시, 다이어그램 데이터가 담긴 **JSON 파일**과 제어기 호환용 텍스트 포맷의 **메타 정보 TXT 파일**이 동시에 다운로드됩니다.
   - `Desc` 필드는 비어있을 경우 메타 정보 및 TXT 파일에서 자동으로 제외 처리됩니다.

## 시작하기

### 설치
```bash
npm install
```

### 로컬 개발 서버 실행
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```
