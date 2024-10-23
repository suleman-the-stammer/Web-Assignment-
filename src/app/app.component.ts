import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Updated to 'styleUrls'
})
export class AppComponent {
  title = 'Calculator';
  displayValue = ''; // To store the input/output

  // Method to handle button presses.
  onPress(value: string) {
    if (value === 'DEL') {
      // Delete the last character from the display.
      this.displayValue = this.displayValue.slice(0, -1);
    } else if (value === 'RESET') {
      // Clear the display.
      this.displayValue = '';
    } else if (value === '=') {
      // Perform calculation
      this.calculate();
    } else {
      // Append the value (number/operator) to the display.
      this.displayValue += value;
    }
  }

  // Method to perform the calculation.
  calculate() {
    try {
      this.displayValue = eval(this.displayValue).toString();  // Using eval to calculate expression
    } catch (e) {
      this.displayValue = 'Error';  // Handle any calculation errors
    }
  }
}
