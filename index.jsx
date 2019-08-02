import React from 'react'
import ReactDOM from 'react-dom'

let cardInfo = {
  cardBuyTicketDiscountVOS:[
    {type:1,desc:'购票首单2张立减¥6.0',subDesc:'开卡或续费后，首次购买电影票时，可在原优惠价基础上享受额外优惠，最多可购买2张特惠票'},
    {type:2,desc:'购票享超值会员价',subDesc:'开卡或续费后，首次购买电影票时，可在原优惠价基础上享受额外优惠，最多可购买2张特惠票'}
  ]
};

let cinemaInfo = {
  cityName:'北京',
  cityNationCountDesc:'3家，全国7家',
  cardBuyTicketDiscountVOS:[
    {desc:'UME国际影城（华星店)',subDesc:'海淀区双榆树科学院南路44号（双安商场对面）'},
    {desc:'UME国际影城（安贞店）',subDesc:'东城区北三环东路36号环球贸易中心E座1层'}
  ]
};

class CardInfo extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
    return (
      <div className="card-info">
        <MemberCard></MemberCard>
        <CardNotice></CardNotice>
        <CardDisplay></CardDisplay>
      </div>
    );
  }
}

class CardTips extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
    let cardInfo = this.props.cardInfo;
    return (
      <div className="card-tips">
        <h2>购票优惠</h2>
        <div className="card-tips-list">
          {
            cardInfo.cardBuyTicketDiscountVOS.map((item,i)=>{
              return (
                <div className="card-tips-item" key={i}>
                  <span className={`right-icon right-icon-${item.type}`}></span>
                  <div>
                      <div className="card-tips-desc">{item.desc}</div>
                      <div className="card-tips-subdesc" dangerouslySetInnerHTML={{ __html: item.subDesc.replace(/\n|\\n/g,'<br />') }}></div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

class CinemaTips extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let cinemaInfo = this.props.cinemaInfo;
    return (
      <div className="card-tips cinema-tips">
        <h2>支持影院</h2>
        <h3><span className="city-name">{cinemaInfo.cityName}</span>{cinemaInfo.cityNationCountDesc}</h3>
        <div className="card-tips-list">
          {
            cinemaInfo.cardBuyTicketDiscountVOS.map((item,j)=>{
              return (
                <div className="card-tips-item cinema-item" key={j}>
                  <div>
                      <div className="card-tips-desc">{item.desc}</div>
                      <div className="card-tips-subdesc" dangerouslySetInnerHTML={{ __html: item.subDesc.replace(/\n|\\n/g,'<br />') }}></div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
function CardLaw(props){
  return(
    <div className="card-law">开卡即同意<span>《影城卡协议》</span></div>
  );
}
function PriceSection(props){
  return (
    <div className="price-section">
      <button className="price-section-button">{props.cardPrice}元特惠开卡</button>
    </div>
  );
}
class HelloPage extends React.Component {
  render() {
    return (
      <div className="page-container">
        <CardTips cardInfo={cardInfo}></CardTips>
        <CinemaTips cinemaInfo={cinemaInfo}></CinemaTips>
        <CardLaw></CardLaw>
        <PriceSection cardPrice="6.9"></PriceSection>
      </div>
    )
  }
}



ReactDOM.render(<HelloPage name="Jane" />, document.querySelector('#app'))