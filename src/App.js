// import liff from '@line/liff';
import { useState, useEffect } from 'react';
import { useLiff } from 'react-liff';

import './App.css';
import { renderToStaticMarkup } from 'react-dom/server';

function App() {

  const { isLoggedIn, liff } = useLiff();

  const [useProfile, setUseProfile] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      liff.getProfile
        .then((profile) => {
          setUseProfile(profile);
        }).catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

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
          <WelcomeText displayName={useProfile.displayName} />
          {/* Welcome {useProfile.displayName}; */}
        </h2>
        <UserAvatar pictureUrl={useProfile.pictureUrl} />
        {/* <picture className="user-avatar">
          <img src={useProfile.pictureUrl} alt="使用者照片" />
        </picture> */}
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
        <LogInOutBtn />
      </div>
    </div>
  );
}

// 歡迎文字元件
function WelcomeText({ displayName }) {
  let welcomeText = "";
  if (!displayName) {
    welcomeText = "請按下方登入";
  } else {
    welcomeText = `歡迎，${displayName}`;
  }
  return (
    <h2 className="welcome-text">
      {welcomeText}
    </h2>
  )
}

// 使用者頭像元件
function UserAvatar({ pictureUrl }) {
  if (pictureUrl) {
    return (
      <picture className="user-avatar">
        <img src={pictureUrl} alt="使用者照片" />
      </picture>
    )
  } else {
    return;
  }
}


// 用來顯示Liff API可以拿到的資訊
function LiffInfoItem({ liffApiName }) {
  const { isReady, liff } = useLiff();
  if (isReady) {
    return (
      <li className="item">
        <p className="title">liff.{liffApiName}:</p>
        <p className="content">{String(liff[liffApiName]())}</p>
      </li>
    );
  }
}

// 登入或登出按鈕
function LogInOutBtn() {
  const { isLoggedIn, liff } = useLiff();
  if (!isLoggedIn) {
    return (
      <button type="button" className="logInOutBtn" onClick={liff.login}>LogIn</button>
    )
  } else if (isLoggedIn) {
    return (
      <button type="button" className="logInOutBtn" onClick={liff.logout}>LogOut</button>
    )
  }
}

export default App;
