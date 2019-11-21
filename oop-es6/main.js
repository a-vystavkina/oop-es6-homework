'use strict';

//Задача #1-2
class Weapon {
 constructor(name, attack, durability, range) {

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
 }

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

  constructor(name, attack, durability, range) {

    super(name, attack, durability, range)
  }
}

class Bow extends Weapon {

  constructor(name, attack, durability, range) {

    super(name, attack, durability, range)
  }
}

class Sword extends Weapon {

  constructor(name, attack, durability, range) {

    super(name, attack, durability, range)
  }
}

class Knife extends Weapon {

  constructor(name, attack, durability, range) {

    super(name, attack, durability, range)
  }
}

class Staff extends Weapon {

  constructor(name, attack, durability, range) {

    super(name, attack, durability, range)
  }
}

class LongArm extends Weapon {

  constructor(name, attack, durability, range) {

    super(name, attack, durability, range)
  }
}

class Axe extends Weapon {

  constructor(name, attack, durability, range) {

    super(name, attack, durability, range)
  }
}

class StaffOfStorm extends Weapon {

  constructor(name, attack, durability, range) {

    super(name, attack, durability, range)
  }
}


const arm = new Arm('Рука', 1, Infinity, 1);

const bow = new Bow('Лук', 10, 200, 3);

const sword = new Sword('Меч', 25, 500, 1);

const knife = new Knife('Меч', 5, 300, 1);

const staff = new Staff('Посох', 8, 300, 2);

const longArm = new LongArm('Длинный лук', 15, arm.durability, 2);

const axe = new Axe('Секира', 27, 800, sword.range);

const staffOfStorm = new StaffOfStorm('Посох бури', 800, staff.durability, 3);

//К задаче №1
console.log(arm.durability);
console.log(bow.durability);
console.log();

console.log(arm.takeDamage(5));
console.log(arm.getDamage());
console.log(arm.isBroken());
console.log();

console.log(bow.takeDamage(200));
console.log(bow.getDamage());
console.log(bow.isBroken());
console.log();

console.log(sword.takeDamage(65));
console.log(sword.getDamage());
console.log(sword.isBroken());
console.log();

console.log(knife.takeDamage(165));
console.log(knife.getDamage());
console.log(knife.isBroken());
console.log();

console.log(staff.takeDamage(65));
console.log(staff.getDamage());
console.log(staff.isBroken());
console.log();

console.log(longArm.takeDamage(65));
console.log(longArm.getDamage());
console.log(longArm.isBroken());
console.log();

console.log(axe.takeDamage(65));
console.log(axe.getDamage());
console.log(axe.isBroken());
console.log();

console.log(staffOfStorm.takeDamage(65));
console.log(staffOfStorm.getDamage());
console.log(staffOfStorm.isBroken());
console.log();

//К задаче №2

console.log(arm.name);
console.log(arm.attack);
console.log(arm.durability);
console.log(arm.range);
console.log();

console.log(bow.name);
console.log(bow.attack);
console.log(bow.durability);
console.log(bow.range);
console.log();

console.log(sword.name);
console.log(sword.attack);
console.log(sword.durability);
console.log(sword.range);
console.log();

console.log(knife.name);
console.log(knife.attack);
console.log(knife.durability);
console.log(knife.range);
console.log();

console.log(staff.name);
console.log(staff.attack);
console.log(staff.durability);
console.log(staff.range);
console.log();

console.log(longArm.name);
console.log(longArm.attack);
console.log(longArm.durability);
console.log(longArm.range);
console.log();

console.log(axe.name);
console.log(axe.attack);
console.log(axe.durability);
console.log(axe.range);
console.log();

console.log(staffOfStorm.name);
console.log(staffOfStorm.attack);
console.log(staffOfStorm.durability);
console.log(staffOfStorm.range);
console.log();


//Задание №3

class StudentLog {

  constructor(name) {

    this.name = name;

    this.arr = [];
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {

    if (grade >= 1 || grade  <= 5) {

      this.arr.push(grade);

      return this.arr.length;

    } else {

      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);

      return 0;
    }
  }

  getAverageBySubject(subject) {

    if (subject === '') {

      return 0;

    } else {

      for (let key in this.arr) {

      let sum = 0;

      for (let i = 0; i < this.arr.length; i++) {

        sum += this.arr[i];
      }

      return sum / this.arr.length;
     }
    }
  }

  getTotalAverage() {

    let sum = 0;

    for (let i = 0; i < this.arr.length; i++) {

      sum += this.arr[i];
    }

    return sum / this.arr.length;
  }
}

const log = new StudentLog('Олег Никифоров');

console.log(log.getName());

// console.log(log.addGrade(3, 'algebra'));
// console.log(log.addGrade('отлично!', 'math'));
// console.log(log.addGrade(4, 'algebra'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade(25, 'geometry'));
// console.log();

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage());
