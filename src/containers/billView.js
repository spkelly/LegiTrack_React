import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgressBar from '../components/ProgressBar';
import SponsorCard from '../components/SponsorCard';
import VoteView from '../components/voteView';
import Navigation from '../components/navbar';
import LoadingIcon from '../components/loadingIcon';
import Footer from '../components/footer';
import {getBillText, selectBill} from '../actions/index';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router';


function getStatus(status){
  switch(status){
    case 1:
      return {text:"Introduced",progress:'25', complete:false}
    case 2:
      return {text:"Engrossed", progress:'50', complete:false}
    case 3:
      return {text:"Enrolled", progress:'75', complete:false}
    case 4:
      return {text:"Passed", progress:'100', complete:false}
    case 5:
    case 6:
      return {text:"Vetoed", prgress: '100', }
    default:
      return "error " + status
  }
}




class BillView extends Component {
  constructor(props){
    super(props);

    this.renderBillText = this.renderBillText.bind(this);
    this.renderTextList = this.renderTextList.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount(){
    let billId = this.props.match.params.id;
    this.props.selectBill(billId)
    .then(()=>{
      let billTexts = this.props.activeBill.texts;
      let mostRecentText = billTexts[billTexts.length -1];

      return this.props.getBillText(mostRecentText.doc_id);
    })
    .then(() =>{
      let loading = document.getElementById("loading-icon")
      loading.parentNode.removeChild(loading);
    })
  }

  renderTextList(texts){
    return texts.map((text) =>{
      return(<li key={text.doc_id}><a

        onClick={()=>this.handleTextChange(text.doc_id)}
        href="#">
          {text.date} ({text.type})
        </a> </li>)
    })
  }

  handleTextChange(textId){
    this.props.getBillText(textId)
  }

  renderBill(bill){
    if(bill){
      let status = getStatus(bill.status);
      let texts = this.props.activeBill.texts;
      return(
        <div id="bill-main">
          <p>{bill.bill_number}</p>
          <h1>{bill.title}</h1>
          <section className="status-container">
            <ProgressBar progress={status.progress}/>
            <p>Status: {status.text}</p>
            <p>Last Update: {bill.status_date}</p>
          </section>
          <section className="description-sec">
          <h5>Description</h5>
          <hr/>
          <p className="bill-desc">{bill.description}</p>
          </section>
          <h5 className="bill-info-lable">Top Sponsors</h5>
          <hr/>
          <div className="container">
            <div className="row">
              {this.renderSponsors(bill.sponsors)}
            </div>
          </div>
          <h5 className="bill-info-lable">Votes</h5>
          <hr/>
          <VoteView votes={bill.votes} />
          <h5 >Texts</h5>
          <hr />
          <div>
            {this.renderTextList(bill.texts)}
          </div>
          <a href={bill.state_link}>State link</a>
        </div>
      )
    }
  }


  renderSponsors(sponsors){
    return sponsors.map((sponsor) =>{
      return <div key={sponsor.people_id} className="col sponsor-col"><SponsorCard sponsor={sponsor} /></div>
    })
  }
  renderBillText(){
    if(this.props.billText){
      let uriPrefix ='data:' + this.props.billText.data.text.mime + ';base64,';
      let uri = uriPrefix + this.props.billText.data.text.doc;
      // return(<iframe src={uri} style={{height:'100%'}}data-id={this.props.billText.data.text.doc_id}/> )
      return( <object data={uri} style={{height:'100%'}}data-id={this.props.billText.data.text.doc_id}/> )
    }
  }
  render(){
    return(
      <div id="bill-view">
        <Navigation />
        <div className="row">
          <div className="col-md-4">
            {this.renderBill(this.props.activeBill)}
          </div>
          <div className="col-md-8 bill-text-container">
            <LoadingIcon />
            {this.renderBillText()}
          </div>
        </div>
        <Footer />
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeBill:state.activeBill,
    billText: state.activeBillText
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getBillText:getBillText, selectBill:selectBill}, dispatch)
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BillView));
