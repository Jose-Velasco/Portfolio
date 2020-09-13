import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.scss']
})
export class TextAnimationComponent implements OnInit {
  private _textToAnimate: string;
  // this is the final text/string that is going to be rendered in the view
  textToDisplay: string;
  private _animationTimer: ReturnType<typeof setTimeout>;
  private _animationAlreadyCompletedOnce: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.textToDisplay = "";
    this._textToAnimate = "<...Web Developer and Software Engineer.../>";
    this.onStartTextAnimation(this._textToAnimate);
  }

  /**
   * letter to append to the end of the sting text that is going
   * to be rendered
   * @param aChar character to append
   */
  private setTextToDisplay(aChar: string): void {
    this.textToDisplay += aChar;
  }

  /**
   * initializes the animation and start the animations
   * the complete text that is going to be animated
   * @param textToAnim complete sting
   */
  onStartTextAnimation(textToAnim: string): void{
    if (this._animationAlreadyCompletedOnce) {
      return;
    }
    const animationTotalLetterCount = this._textToAnimate.length - 1;
    const startAnimationIteration = 0;
    this.animateText(textToAnim, animationTotalLetterCount, startAnimationIteration);
  }

  /**
   * handles adding individual letters to the final string that is going to be rendered in the view.
   * once all letters are added to the final string the function cleans up setTimeout and retuns.
   * @param stringToAnimate complete string to animate
   * @param totalAnimationIterations the total amount of letters in the string that is going to be animated
   * @param currentIteration what animation iteration currently in
   */
  private animateText(stringToAnimate: string, totalAnimationIterations: number, currentIteration: number): void {
    this.setTextToDisplay(stringToAnimate[currentIteration]);
    if (currentIteration >= totalAnimationIterations) {
      clearTimeout(this._animationTimer);
      this._animationAlreadyCompletedOnce = true;
      return;
    } else {
      this._animationTimer = setTimeout(() => {
        this.animateText(stringToAnimate, totalAnimationIterations, currentIteration + 1);
      }, 160);
    }
  }

}
