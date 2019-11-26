'use strict';

//Задача #1-2
class Weapon {
  constructor({name, attack, durability, range}) {

    this.name = name;

    this.attack = attack;

    this.durability = durability;

    this.range = range;
    
    this.arr = [];
  }

  takeDamage(damage) {

   let value = this.durability - damage;

   if (value > 0) {

     this.arr.push(value);

     return value;

   } else {

     return 0;
   }
 };

 getDamage() {

   let value;

   let key = this.arr * 0.3;

     if (key >= this.durability) {

       return this.attack;

     } else if (this.durability === 0) {

       return 0;

     } else {

       return this.attack / 2;
     }
 }

 isBroken() {

   if (this.arr > 0) {

     return false;

   } else {

     return true;
   }
 }
}

class Arm extends Weapon {
  constructor({}) {

    super({})

    this.name = 'Рука';

    this.attack = 1;

    this.durability = Infinity;

    this.range = 1;
  }
}

const arm = new Arm({});

console.log(arm.takeDamage(200));
console.log(arm.getDamage());
console.log(arm.isBroken());
console.log(arm.name);
console.log(arm.attack);
console.log(arm.durability);
console.log(arm.range);
console.log();

class Bow extends Weapon {
  constructor({}) {
    super({})

    this.name = 'Лук';

    this.attack = 10;

    this.durability = 200;

    this.range = 3;
  }
}

const bow = new Bow({});

console.log(bow.takeDamage(200));
console.log(bow.getDamage());
console.log(bow.isBroken());
console.log(bow.name);
console.log(bow.attack);
console.log(bow.durability);
console.log(bow.range);
console.log();


class Sword extends Weapon {
  constructor({}) {
    super({})

    this.name = 'Меч';

    this.attack = 25;

    this.durability = 500;

    this.range = 1;
  }
}

const sword = new Sword({});

console.log(sword.takeDamage(200));
console.log(sword.getDamage());
console.log(sword.isBroken());
console.log(sword.name);
console.log(sword.attack);
console.log(sword.durability);
console.log(sword.range);
console.log();

class Knife extends Weapon {
  constructor({}) {
    super({})

    this.name = 'Нож';

    this.attack = 5;

    this.durability = 300;

    this.range = 1;
  }
}

const knife = new Knife({});

console.log(knife.takeDamage(200));
console.log(knife.getDamage());
console.log(knife.isBroken());
console.log(knife.name);
console.log(knife.attack);
console.log(knife.durability);
console.log(knife.range);
console.log();

class Staff extends Weapon {
  constructor({}) {
    super({})

    this.name = 'Посох';

    this.attack = 8;

    this.durability = 300;

    this.range = 2;
  }
}

const staff = new Staff({});

console.log(staff.takeDamage(200));
console.log(staff.getDamage());
console.log(staff.isBroken());
console.log(staff.name);
console.log(staff.attack);
console.log(staff.durability);
console.log(staff.range);
console.log();

class LongBow extends Bow {
  constructor({durability}) {
    super({durability})
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 2;
  }
}

const longBow = new LongBow({});

console.log(longBow.takeDamage(200));
console.log(longBow.getDamage());
console.log(longBow.isBroken());
console.log(longBow.name);
console.log(longBow.attack);
console.log(longBow.durability);
console.log(longBow.range);
console.log();

class Axe extends Sword {
  constructor({range}) {
    super({range})
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

const axe = new Axe({});

console.log(axe.takeDamage(200));
console.log(axe.getDamage());
console.log(axe.isBroken());
console.log(axe.name);
console.log(axe.attack);
console.log(axe.durability);
console.log(axe.range);
console.log();

class StaffOfStorm extends Staff {
  constructor({durability}) {
    super({durability})
    this.name = 'Посох бури';
    this.attack = 10;
    this.range = 3;
  }
}

const staffOfStorm = new StaffOfStorm({});

console.log(staffOfStorm.takeDamage(200));
console.log(staffOfStorm.getDamage());
console.log(staffOfStorm.isBroken());
console.log(staffOfStorm.name);
console.log(staffOfStorm.attack);
console.log(staffOfStorm.durability);
console.log(staffOfStorm.range);
console.log();

//Задача №3

class StudentLog {
  constructor(name) {

    this.name = name;

    this.obj = {};

    this.arr = [];
  }

  getName() {

    return this.name;

  }

  addGrade(grade, subject) { 

    if (!(subject in this.obj)) {

      this.obj[subject] = [];
    } 
    if (grade >= 1 && grade <= 5) {

      this.obj[subject].push(grade);

      console.log(this.obj);

    } else {

       console.log(`Вы пытались поставить оценку ${grade}, принимаются только оценки от 1 до 5`);
    }
    return this.obj[subject].length;
  }

  getAverageBySubject(subject) {

    if (subject === '') {

      return 0;

    } else if (!(subject in this.obj)) {

      return 0;

    } else {

      let sum = 0;

      for (let i = 0; i < this.obj[subject].length; i++) {

        sum += this.obj[subject][i];

      }

      return sum / this.obj[subject].length;
    }
  }

  getTotalAverage() {

    for (let subject in this.obj) {

      if (subject === '') {

        return 0;
      } else if (!(subject in this.obj)) {

        return 0; 

      } else {

        this.arr.push(this.obj[subject]);

        console.log(this.arr);

        let result = this.arr.reduce(function(flat, current) {

        return flat.concat(current);

        }, []);

        console.log(result);

        let sum = 0;

        for (let i = 0; i < result.length; i++) {

          sum += result[i];
        }
        //console.log(sum / result.length);
        return sum / result.length; // в result попадает только первый subject
     }
    }
  }
 
}

  
const log = new StudentLog('Олег Никифоров');

// console.log(log.getName()) // Олег Никифоров
// console.log(log.addGrade(3, 'algebra'));
// // 1
// console.log(log.addGrade('отлично!', 'math'));
// // Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// // 0
// console.log(log.addGrade(4, 'algebra'));
// // 1
// console.log(log.addGrade(5, 'geometry'));
// // 1
// console.log(log.addGrade(25, 'geometry'));
// // Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// // 1

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75
