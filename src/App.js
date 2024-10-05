import './App.css';
import liff from '@line/liff';

liff.init({
  liffId: '2006424481-BWa6zeaw'
}).then(() => {
  // console.log(liff.isLoggedIn());  // 判斷開啟此網頁的 LINE 使用者是否為登入狀態
});


function App() {
  return (
    <div className="App">
      <div className="home-page-wrap">
        <h1 className="page-title">
          Hello Liff!!
        </h1>
        <ul className="liff-info-list">
          <LiffInfoItem liffApiName="getOS" />
          <LiffInfoItem liffApiName="getLanguage" />
          <LiffInfoItem liffApiName="getLineVersion" />
          <LiffInfoItem liffApiName="getVersion" />
          <LiffInfoItem liffApiName="isLoggedIn" />
          <LiffInfoItem liffApiName="isInClient" />
          {/* <LiffInfoItem liffApiName="getAccessToken" /> */}
          {/* <LiffInfoItem liffApiName="getIDToken" /> */}
          {/* <LiffInfoItem liffApiName="getContext" /> */}
          {/* <LiffInfoItem liffApiName="getProfile" /> */}
          {/* <LiffInfoItem liffApiName="getFriendship" /> */}
        </ul>
      </div>
    </div>
  );
}

function LiffInfoItem({ liffApiName }) {
  return (
    <li className="item">
      <p className="title">liff.{liffApiName}:</p>
      <p className="content">{String(liff[liffApiName]())}</p>
    </li>
  );
}

export default App;
