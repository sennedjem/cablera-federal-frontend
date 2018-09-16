import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { PostsAddEditComponent } from './posts-add-edit.component'
import { PostsAddEditModule } from './posts-add-edit.module'


describe('PostsAddEditComponent', () => {
  let component: PostsAddEditComponent
  let fixture: ComponentFixture<PostsAddEditComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          PostsAddEditModule,
          BrowserAnimationsModule,
          RouterTestingModule
         ],
         
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsAddEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
