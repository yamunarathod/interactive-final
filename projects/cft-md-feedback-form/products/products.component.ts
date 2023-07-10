import { Component, OnInit } from '@angular/core';
import { product, products } from '../models/brands.models';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FeedbackServiceService } from '../feedback-service.service';
import { FeedbackForm } from '../models/feedback.model';
import * as uuid from 'uuid';
import { brand1, brand2, brand3, brand4 } from '../models/brandData';
import { NotifierService } from 'angular-notifier';
import * as _ from 'lodash';

@Component({
    selector: 'cft-mdew-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    private readonly notifier: NotifierService;
    name: string;
    // phoneNumber: string;
    route: ActivatedRoute;
    selectedProducts: string[] = [];
    finalProducts = {};
      flavours: string ="Discover";
    brands: any = [];
    constructor(
      notifierService: NotifierService,
        _route: ActivatedRoute,
        public feedbackService: FeedbackServiceService,
        public router: Router
    )
    {
        this.route = _route;
        this.brands= _.cloneDeep(brand4);;
        this.notifier = notifierService;
        this.selectedProducts = [];
        this.finalProducts={};
    }

    ngOnInit(): void {

        this.name = this.route.snapshot.queryParams['name'];
        // this.phoneNumber = this.route.snapshot.queryParams['phoneNumber'];
    }

    productColor: string = 'black';


    selectProduct(brandIndex: number, productIndex: number) {
        if (
            this.selectedProducts != null &&
            this.selectedProducts.includes(
                this.brands[brandIndex].product[productIndex].productName
            )
        ) {
            // color change
            this.brands[brandIndex].product[productIndex].color = 'black';
            let index = this.selectedProducts.indexOf(
                this.brands[brandIndex].product[productIndex].productName
            );
            if (index > -1) {
                // only splice array when item is found
                this.selectedProducts.splice(index, 1); // 2nd parameter means remove one item only
            }
            console.log(this.selectedProducts);
        } else {

          // this.brands[brandIndex].product.forEach(element => {
          //   element.color='black'
          // });
          // this.brands[brandIndex].product[productIndex].color = '#3F2EA8';

          // this.selectedProducts= [];
          // this.selectedProducts.push(
          //   this.brands[brandIndex].product[productIndex].productName
          // );
          // console.log(this.selectedProducts);
            if (
                this.selectedProducts == null ||
                this.selectedProducts.length < 3
            ) {

              this.brands[brandIndex].product[productIndex].color = '#3F2EA8';
                // color change to selected
                this.selectedProducts.push(
                    this.brands[brandIndex].product[productIndex].productName
                );
                console.log(this.selectedProducts);
            }
        }
    }

    submit(inputForm: any) {
      console.log(inputForm.others);
      if(inputForm.others){
        this.finalProducts["Others"] = inputForm.others
      }

        if (this.selectedProducts.length == 3) {
            this.selectedProducts.forEach((product) => {
                this.brands.forEach((brand) => {
                    let productAvailable = brand.product.find(
                        (x) => x.productName == product
                    );
                    if (productAvailable) {
                        if (Object.hasOwn(this.finalProducts, brand.brandName)) {
                            this.finalProducts[brand.brandName].push(product);

                        } else {
                            this.finalProducts[brand.brandName] = [];
                            this.finalProducts[brand.brandName].push(product);
                        }
                    }
                });
            });

            const feedback = new FeedbackForm(
                uuid.v4(),
                this.name,
                this.finalProducts
            );

            this.feedbackService
                .create(feedback)
                .then((x) => {
                    console.log('created');
                    this.router.navigate(['/thanks']);
                })
                .catch((x) => {
                    console.log(x.message);
                });
        }
        else{
          console.log("hit");
          this.notifier.show({
            type: 'success',
            message: 'You are awesome! I mean it!',
            id: 'THAT_NOTIFICATION_ID', // Again, this is optional
          });
        }
    }
}
