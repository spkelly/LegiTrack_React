import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgressBar from '../components/ProgressBar';
import SponsorCard from '../components/SponsorCard';
import VoteView from '../components/voteView';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import {getBillText, selectBill} from '../actions/index';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router';


class BillView extends Component {
  constructor(props){
    super(props);

    this.renderBillText = this.renderBillText.bind(this);
    this.renderTextList = this.renderTextList.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount(){
    let billId = this.props.match.params.id;
    this.props.selectBill(billId).then(()=>{
      let billTexts = this.props.activeBill.texts;
      let mostRecentText = billTexts[billTexts.length -1];

      this.props.getBillText(mostRecentText.doc_id);
    })

  }
  renderTextList(texts){
    return texts.map((text) =>{
      return(<li key={text.doc_id}><a

        onClick={()=>this.handleTextChange(text.doc_id)}
        href="#">
          {text.date}
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
          <h4>{bill.title}</h4>
          <ProgressBar progress="75"/>
          <p>Status: {bill.status}</p>
          <h5>Description</h5>
          <hr/>
          <p>{bill.description}</p>
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

          <h5>Texts</h5>
          <hr />
          <div>
            {this.renderTextList(bill.texts)}
          </div>

          <p>Status Date: {bill.status_date}</p>
          <a href={bill.state_link}>State link</a>
        </div>
      )
    }
  }


  renderSponsors(sponsors){
    return sponsors.map((sponsor) =>{
      console.log(sponsor)
      return <div key={sponsor.people_id} className="col-md-6"><SponsorCard sponsor={sponsor} /></div>
    })
  }
  renderBillText(){
    if(this.props.billText){
      console.log("rendering bill text", this.props.billText.data.text.doc_id);
      let uriPrefix ='data:' + this.props.billText.data.text.mime + ';base64,';

      let uri = uriPrefix + this.props.billText.data.text.doc;
      return(<iframe src={uri} data-id={this.props.billText.data.text.doc_id}/> )
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
          <div className="col-md-8">
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
