import './App.css';
import liff from '@line/liff';
import { useState, useEffect } from 'react';


liff.init({
  liffId: '2006424481-BWa6zeaw'
}).then(() => {
  // console.log(liff.isLoggedIn());  // 判斷開啟此網頁的 LINE 使用者是否為登入狀態
  if (!liff.isLoggedIn()) {
    liff.login();
  } else {
    liff.getProfile()
      .then((profile) => {
        // console.log(profile);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

function App() {

  const [useProfile, setUseProfile] = useState({});
  // liff.init({
  //   liffId: '2006424481-BWa6zeaw'
  // }).then(() => {
  //   // console.log(liff.isLoggedIn());  // 判斷開啟此網頁的 LINE 使用者是否為登入狀態
  //   if (!liff.isLoggedIn()) {
  //     // liff.login();
  //   } else {
  //     liff.getProfile()
  //       .then((profile) => {
  //         setUseProfile(profile);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // });
  useEffect(() => {
    liff.getProfile()
      .then((profile) => {
        setUseProfile(profile);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  // useEffect(() => {
  //   console.log(useProfile);
  // }, [useProfile]);

  return (
    <div className="App">
      <div className="home-page-wrap">
        <h1 className="page-title">
          Hello Liff!!
        </h1>
        <h2 className="welcome-text">
          Welcome {useProfile.displayName};
        </h2>
        <picture className="user-avatar">
          <img src={useProfile.pictureUrl} alt="使用者照片" />
        </picture>
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
