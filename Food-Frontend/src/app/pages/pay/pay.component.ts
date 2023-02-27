import { Component } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  buttonColor="black";
  buttonType="buy";
  isCoustomSize=250;
  buttonHeight=50;
  isTop= window===window.top;

  paymentRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[{
      type:"CARD",
      parameters:{
        allowedPamentMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
        allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
      },
      tokenizationSpecification:{
        type:"PAYMENT_GATEWAY",
        parameters:{
          gateway:"example",
          gatewayMerchantI:"exampleGatewayMerchantId"
        }
      }
    }
    ],
    merchantInfo:{
      merchantId:"12345678901234567890",
      merchantName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPrice:"10000.00",
      CurrencyCode:"INR",
      countryCode:"INDIA"
    }
  };
  onLoadPaymentData(event:any){
    console.log("Load Payment data by project",event.details)
  }
}
