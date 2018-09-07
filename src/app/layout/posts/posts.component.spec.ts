import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { PostsComponent } from './posts.component'
import { PostsModule } from './posts.module'


describe('PostsComponent', () => {
  let component: PostsComponent
  let fixture: ComponentFixture<PostsComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          PostsModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
         
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
