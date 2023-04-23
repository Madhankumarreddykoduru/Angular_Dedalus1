import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  feedbacks:any
  constructor(@Inject(FeedbackService)private fs:FeedbackService)  {
    this.fs.getFeedbacks().subscribe(
       {
           next : (data:any)=> this.feedbacks =data
       }
    )
 }
}
