import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MediaComponent } from './media.component'
import { MediaModule } from './media.module'

describe('MediaComponent', () => {
  let component: MediaComponent
  let fixture: ComponentFixture<MediaComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          MediaModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
