import { Injectable } from '@angular/core';
import { Projects } from '@core/classes/projects.class';
import { of } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseService {

  public projects: Projects[] = [
    {
      id: 1,
      faTitle: "اتوماسیون جامع پژوهشکده وزارت بازرگانی",
      enTitle: "Comprehensive Automation of the Research Institute of the Ministry of Commerce",
      employer: "پیمان حسینی پاکدامن",
      researchGroups: ['پژوهش 1', 'پژوهش 2'],
      executor: 'سید مهناز حسینی',
      progressPercentage: 90
    },
    {
      id: 2,
      faTitle: "اتوماسیون جامع پژوهشکده وزارت بازرگانی",
      enTitle: "Comprehensive Automation of the Research Institute of the Ministry of Commerce",
      employer: "پیمان حسینی پاکدامن",
      researchGroups: ['پژوهش 1', 'پژوهش 2'],
      executor: 'سید مهناز حسینی',
      progressPercentage: 50
    },
    {
      id: 3,
      faTitle: "اتوماسیون جامع پژوهشکده وزارت بازرگانی",
      enTitle: "Comprehensive Automation of the Research Institute of the Ministry of Commerce",
      employer: "پیمان حسینی پاکدامن",
      researchGroups: ['پژوهش 1', 'پژوهش 2'],
      executor: 'سید مهناز حسینی',
      progressPercentage: 20
    },
    {
      id: 4,
      faTitle: "اتوماسیون جامع پژوهشکده وزارت بازرگانی",
      enTitle: "Comprehensive Automation of the Research Institute of the Ministry of Commerce",
      employer: "پیمان حسینی پاکدامن",
      researchGroups: ['پژوهش 1', 'پژوهش 2'],
      executor: 'سید مهناز حسینی',
      progressPercentage: 10
    },
    {
      id: 5,
      faTitle: "اتوماسیون جامع پژوهشکده وزارت بازرگانی",
      enTitle: "Comprehensive Automation of the Research Institute of the Ministry of Commerce",
      employer: "پیمان حسینی پاکدامن",
      researchGroups: ['پژوهش 1', 'پژوهش 2'],
      executor: 'سید مهناز حسینی',
      progressPercentage: 70
    },
    {
      id: 6,
      faTitle: "اتوماسیون جامع پژوهشکده وزارت بازرگانی",
      enTitle: "Comprehensive Automation of the Research Institute of the Ministry of Commerce",
      employer: "پیمان حسینی پاکدامن",
      researchGroups: ['پژوهش 1', 'پژوهش 2'],
      executor: 'سید مهناز حسینی',
      progressPercentage: 100
    },
    {
      id: 7,
      faTitle: "اتوماسیون جامع پژوهشکده وزارت بازرگانی",
      enTitle: "Comprehensive Automation of the Research Institute of the Ministry of Commerce",
      employer: "پیمان حسینی پاکدامن",
      researchGroups: ['پژوهش 1', 'پژوهش 2'],
      executor: 'سید مهناز حسینی',
      progressPercentage: 80
    },
    {
      id: 9,
      faTitle: "اتوماسیون جامع پژوهشکده وزارت بازرگانی",
      enTitle: "Comprehensive Automation of the Research Institute of the Ministry of Commerce",
      employer: "پیمان حسینی پاکدامن",
      researchGroups: ['پژوهش 1', 'پژوهش 2'],
      executor: 'سید مهناز حسینی',
      progressPercentage: 25
    },
    {
      id: 10,
      faTitle: "اتوماسیون جامع پژوهشکده وزارت بازرگانی",
      enTitle: "Comprehensive Automation of the Research Institute of the Ministry of Commerce",
      employer: "پیمان حسینی پاکدامن",
      researchGroups: ['پژوهش 1', 'پژوهش 2'],
      executor: 'سید مهناز حسینی',
      progressPercentage: 15
    },
  ];

  constructor() {
    super();
  }

  /**
   * get projects
   */
  public getProjects() {
    let result = of(this.projects);
    return result;
  }

}
