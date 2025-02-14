"use client"
import { useEffect } from 'react';

export default function Home(){

  useEffect(() => {
    const audio1 = new Audio("/audios/dokan.wav");
    const audio2 = new Audio("/audios/coin.wav");
    const audio3 = new Audio("/audios/1up.wav");
    const audio4 = new Audio("/audios/suichu.wav");
    const audio5 = new Audio("/audios/goal_flag.wav");
    const audio6 = new Audio("/audios/select_course.wav");
    const audios = [audio1, audio2, audio3, audio4, audio5, audio6];

    function playSound(index){
      audios[index].play()
    }

    const containers = document.querySelectorAll('.container');
    containers.forEach((container, index) => {
      container.addEventListener("click", () => playSound(index));
    });

    

    return () => {
      containers.forEach((container, index) => {
        container.removeEventListener('click', playSound(index));
      });
    };
  }, []);

  return (
    <div className="main">
      <div className="container">
        <p>土管</p>
      </div>
      
      <div className="container">
        <p>コイン</p>
      </div>
      
      <div className="container">
        <p>1UP</p>
      </div>
      
      <div className="container">
        <p>泳ぎ</p>
      </div>
      
      <div className="container">
        <p>ゴール</p>
      </div>
      
      <div className="container">
        <p>3ステージセレクト</p>
      </div>

    </div>
  )
}