import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';
import { AppConfig } from '@core/interfaces/appconfig.interface';
import { Product } from '@core/interfaces/product.interface';
import { ConfigService } from '@core/service/app.config.service';
import { ProductService } from '@core/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends BaseComponent implements OnInit {
  public products: Product[];
  public chartData1: any = {
    labels: [
      'فروردین',
      'اردیبهشت',
      'فرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
    ],
    datasets: [
      {
        label: 'اول',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: '#2f4860',
        borderColor: '#2f4860',
        tension: 0.4,
      },
      {
        label: 'دوم',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: '#00bb7e',
        borderColor: '#00bb7e',
        tension: 0.4,
      },
    ],
  };
  public chartData2: any = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  public chartData3: any = {
    labels: [
      'فروردین',
      'اردیبهشت',
      'فرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
    ],
    datasets: [
      {
        type: 'line',
        label: 'اول',
        borderColor: '#42A5F5',
        borderWidth: 2,
        fill: false,
        data: [50, 25, 12, 48, 56, 76, 42],
      },
      {
        type: 'bar',
        label: 'دوم',
        backgroundColor: '#66BB6A',
        data: [21, 84, 24, 75, 37, 65, 34],
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'سوم',
        backgroundColor: '#FFA726',
        data: [41, 52, 24, 74, 23, 21, 32],
      },
    ],
  };
  public chartData4: any = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        "#42A5F5",
        "#66BB6A",
        "#FFA726",
        "#26C6DA",
        "#7E57C2"
      ],
      label: 'My dataset'
    }],
    labels: [
      "قرمز",
      "سبز",
      "زرد",
      "خاکستری",
      "آبی"
    ]
  };
  public chartOptions: any = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
            family: 'iranyekan'
          }
        }
      },
      title: {
        font: {
          size: 14,
          family: 'iranyekan'
        }
      },
      tooltip: {
        titleFont: {
          family: 'iranyekan',
        },
        bodyFont: {
          family: 'iranyekan',
        },
        footerFont: {
          family: 'iranyekan',
        },
      }
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 10,
            family: 'iranyekan'
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 10,
            family: 'iranyekan'
          }
        }
      }
    }
  };
  public config: AppConfig;

  constructor(
    private productService: ProductService,
    public configService: ConfigService
  ) {
    super();
    this.changeLayoutService.showSidebar();
    this.changeLayoutService.showTopbar();
    this.changeLayoutService.outletNotChange();
  }

  ngOnInit() {
    this.config = this.configService.config;
    this.subs.sink = this.configService.configUpdate$.subscribe(
      (config) => {
        this.config = config;
        this.updateChartOptions();
      }
    );
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
  }

  public updateChartOptions() {
    if (this.config.dark) this.applyDarkTheme();
    else this.applyLightTheme();
  }

  public applyDarkTheme() {
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(160, 167, 181, .3)',
          },
        },
        y: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(160, 167, 181, .3)',
          },
        },
      },
    };
  }

  public applyLightTheme() {
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
