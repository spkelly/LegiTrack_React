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
      return "Introduced"
    case 2:
      return "Engrossed"
    case 3:
      return "Enrolled"
    case 4:
      return "Passed"
    case 5:
    case 6:
      return "Vetoed"
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
      console.log(loading);
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
    console.log(textId);
    this.props.getBillText(textId)
  }

  renderBill(bill){
    if(bill){
      let texts = this.props.activeBill.texts;
      return(
        <div id="bill-main">
          <p>{bill.bill_number}</p>
          <h1>{bill.title}</h1>
          <section className="status-container">
            <ProgressBar progress="75"/>
            <p>Status: {getStatus(bill.status)}</p>
            <p>Last Update: {bill.status_date}</p>
          </section>
          <h5>Description</h5>
          <hr/>
          <p className="bill-desc">{bill.description}</p>
          <h5 className="bill-info-lable">Sponsors</h5>
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
      console.log(sponsor)
      return <div key={sponsor.people_id} className="col-md-6 col-6"><SponsorCard sponsor={sponsor} /></div>
    })
  }
  renderBillText(){
    if(this.props.billText){
      console.log("rendering bill text", this.props.billText.data.text.doc_id);
      let uriPrefix ='data:' + this.props.billText.data.text.mime + ';base64,';

      let uri = uriPrefix + this.props.billText.data.text.doc;
      return(<iframe src={uri} style={{height:'100%'}}data-id={this.props.billText.data.text.doc_id}/> )
    }
  }
  render(){
    console.log(this.props);
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
