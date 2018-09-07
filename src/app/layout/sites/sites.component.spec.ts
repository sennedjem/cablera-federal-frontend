import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SitesComponent } from './sites.component'
import { SitesModule } from './sites.module'

describe('SitesComponent', () => {
  let component: SitesComponent
  let fixture: ComponentFixture<SitesComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          SitesModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
