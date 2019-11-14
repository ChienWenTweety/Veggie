import React from 'react';
import './record.css';
import "../HomeComponents/animate.css";	



function Records({ match }) {
    console.log(match.params.id)
    let x = match.params.id;
    let y = x.substring(0,15)


    return <div>
 
        <section class="section intro">
            <div class="container">
                <div class='dc'>
                    <div class="df ">
                        <h1 className='resume '>產品履歷</h1>
                        <h2 class="center">鳳梨</h2>
                        <hr/>
                        <h2>合約地址:0x3216549876524321987654321987654321875</h2>
                        <h2>產品編號:d54f6sa4df45asdf45a6sd45f6sa4df654asd6r</h2>
                        <br/>
                    </div>
                </div>
            </div>
        </section>

        <div class="timeback">
        <section class="timeline2">
            <br/><br/><br/><br/><br/>
            <ol>
                <li className='animated jello'>
                    <div >
                        <h3>農場出貨</h3><hr/>
                        <h6><b>出貨時間:</b>&nbsp;&nbsp;<font className='ff'>2019/01/02</font></h6>
                        <h6><b>農場名稱:</b>&nbsp;&nbsp;<font className='ff'>加利略</font></h6>
                        <h6><b>農場地址:</b>&nbsp;&nbsp;<font className='ff'>{y}</font></h6>
                        <h6><b>農夫姓名:</b>&nbsp;&nbsp;<font className='ff'>陳倩文</font></h6>
        </div>
                </li>
                <li>
                    <div class="d">
                    <h3>揀貨</h3><hr/>
                        <h6><b>揀貨時間:</b></h6>
                        <h6><b>揀貨員:</b></h6>
                        <h6><b>揀貨地點:</b></h6>
                        <h6>&nbsp;</h6></div>
                </li>
                <li>
                    <div>
                    <h3>入庫</h3><hr/>
                        <h6><b>入庫時間:</b></h6>
                        <h6><b>倉庫代號:</b></h6>
                        <h6><b>倉庫地點:</b></h6>
                        <h6><b>倉庫溫度:</b></h6>  </div>
                </li>
                <li>
                    <div class="d">
                    <h3>出貨</h3><hr/>
                        <h6>出貨時間:</h6>
                        <h6>出貨員:</h6>
                        <h6>出貨車號:</h6>
                        <h6>&nbsp;</h6>  </div>
                </li>
                <li>
                    <div>
                    <h3>抵達賣場</h3><hr/>
                        <h6>抵達時間:</h6>
                        <h6>抵達地點:</h6>
                        <h6>賣場代號:</h6>
                        <h6>賣場名稱:</h6>  </div>
                </li>

                <li className="two"></li>


            </ol>
        </section>
        </div>
    </div>
}


export { Records };