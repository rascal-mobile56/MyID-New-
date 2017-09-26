import { Injectable } from '@angular/core';

@Injectable()
export class BaseMedicineService {
  public forms: any = [
    {id: 1, name: "Pill", file: "tablet-icon/icon-pill.png"},
    {id: 2, name: "Bubbles", file: "tablet-icon/icon-bubbles.png"},
    {id: 3, name: "Shape", file: "tablet-icon/icon-shape.png"},
    {id: 4, name: "Tube", file: "tablet-icon/icon-tube.png"}
  ];

  public colors: any = [
    {id: 1, name: "White", color: "white"},
    {id: 2, name: "Tan", color: "tan"},
    {id: 3, name: "Brown", color: "brown"},
    {id: 4, name: "Red", color: "red"},
    {id: 5, name: "Pink", color: "pink"},
    {id: 6, name: "Peach", color: "peachpuff"},
    {id: 7, name: "Orange", color: "orange"},
    {id: 8, name: "Yellow", color: "yellow"},
    {id: 9, name: "Green", color: "green"},
    {id: 10, name: "Turquoise", color: "turquoise"},
    {id: 11, name: "Blue", color: "blue"},
    {id: 12, name: "Purple", color: "purple"},
  ];

  constructor() {
  }

  getForms() {
    return this.forms;
  }

  getColors() {
    return this.colors;
  }

  getColor(id) {
    return new Promise((resolve, reject) => {
      try {
        let items = this.colors.filter(item => item.id === id);
        resolve(items[0]);
      } catch(e) {
        reject(e);
      }
    });
  }

  getForm(id) {
    return new Promise((resolve, reject) => {
      try {
        let items = this.forms.filter(item => item.id === id);
        resolve(items[0]);
      } catch(e) {
        reject(e);
      }
    });
  }
}
