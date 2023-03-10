{
 type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
 };

 interface CoffeMaker {
  makeCoffee(shots: number): CoffeeCup;
 }
 interface CommercialCoffeMaker {
  makeCoffee(shots: number): CoffeeCup;
  fillCoffeeBeans(beans: number): void;
  clean(): void;
 }
 class CoffeMachine implements CoffeMaker, CommercialCoffeMaker {
  private static BEANS_GRAMM_PER_SHOT: number = 7;
  private coffeeBeans: number = 0;

  //항상 처음에 호출됨
  private constructor(coffeeBeans: number) {
   this.coffeeBeans = coffeeBeans;
  }

  static makeMachine(coffeeBeans: number): CoffeMachine {
   return new CoffeMachine(coffeeBeans);
  }

  fillCoffeeBeans(beans: number) {
   if (beans < 0) {
    throw new Error("value for beans should be greater than 0");
   }

   this.coffeeBeans += beans;
  }

  clean(): void {
   console.log("cleaning the machine...");
  }

  private grindBeans(shots: number) {
   console.log(`grinding beans for ${shots}`);
   if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAMM_PER_SHOT) {
    throw new Error("Not enough coffee beans!");
   }
   this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAMM_PER_SHOT;
  }

  private preheat(): void {
   console.log("heating up...🔥");
  }

  private extract(shots: number): CoffeeCup {
   console.log(`Pulling ${shots} shots...☕️`);

   return {
    shots,
    hasMilk: false,
   };
  }

  makeCoffee(shots: number): CoffeeCup {
   this.grindBeans(shots);
   this.preheat();

   return this.extract(shots);
  }
 }

 //const maker: CoffeMachine = CoffeMachine.makeMachine(32);
 //  maker.fillCoffeeBeans(32);
 //  maker.makeCoffee(2);

 //  const maker2: CommercialCoffeMaker = CoffeMachine.makeMachine(32);
 //  maker2.fillCoffeeBeans(32);
 //  maker2.makeCoffee(2);
 //  maker2.clean;

 class AmateurUser {
  constructor(private machine: CoffeMaker) {}
  makeCoffee() {
   const coffee = this.machine.makeCoffee(2);
   console.log(coffee);
  }
 }
 class ProBarista {
  constructor(private machine: CommercialCoffeMaker) {}
  makeCoffee() {
   const coffee = this.machine.makeCoffee(2);
   console.log(coffee);
   this.machine.fillCoffeeBeans(45);
   this.machine.clean();
  }
 }

 const maker: CoffeMachine = CoffeMachine.makeMachine(32);
 const amateur = new AmateurUser(maker);
 const pro = new ProBarista(maker);
 pro.makeCoffee();
 //amateur.makeCoffee();
}
