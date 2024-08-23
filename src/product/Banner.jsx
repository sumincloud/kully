import React, {useState, useEffect} from 'react';

function Banner(props) {
  //const [변수명, 함수명] = useState();
  const [RandomPic, setRandomPic] = useState();
  
  useEffect(()=>{
    const imgArray = [
      'banner01.jpg',
      'banner02.jpg',
      'banner03.jpg'
    ]

    let timerId; // 타이머 ID를 저장할 변수

    const showImage = () => {
      //const imgNum = Math.floor(Math.random()*3+1);  //1~3까지
      const imgNum = Math.round(Math.random()*2); //1~3까지
      
      //랜덤 숫자를 배열객체의 n번째에 담아서 함수에 넘긴다.
      setRandomPic(imgArray[imgNum]);
      console.log(imgArray[imgNum]);
      setTimeout(showImage, 5000);
    };

    showImage();

    return () => {
      clearTimeout(timerId);
    };
  }, []);


  return (
    <>
      <article>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/${RandomPic}`} alt="이벤트배너"/>
        </div>
      </article>
    </>
  );
}

export default Banner;