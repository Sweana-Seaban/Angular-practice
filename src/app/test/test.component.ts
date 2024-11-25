import { TitleCasePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  @Input() value: number | undefined;
  @Input() name: string | undefined;
  title = 'test component';
  @Output() textChange = new EventEmitter<string>();

  //two-way binding
  @Input()
  count!: number;
  @Output() countChange = new EventEmitter<number>();

  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
  }

  setTextChange() {
    this.textChange.emit('Text from child component - test');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(
  //     `ngOnChange... previous name:${changes['name'].previousValue}  current name:${changes['name'].currentValue}`
  //   );
  // }
}
