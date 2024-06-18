import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("timeline", { static: true }) timelineElement!: ElementRef;
  private timelineInstance: any;
  public selectedItemDetails: any = null;
  private timelineItems =  [
    { id: 1, group: 0, content: "sdo", start: "1991-01-15" },
    { id: 2, group: 0, content: "cup", start: "1992-02-20" },
    { id: 3, group: 0, content: "lis", start: "1993-03-10" },
    { id: 4, group: 0, content: "sdo", start: "1994-04-25" },
    { id: 5, group: 0, content: "cup", start: "1995-05-30" },
    { id: 6, group: 0, content: "lis", start: "1996-06-15" },
    { id: 7, group: 0, content: "sdo", start: "1997-07-05" },
    { id: 8, group: 0, content: "cup", start: "1998-08-20" },
    { id: 9, group: 0, content: "lis", start: "1999-09-25" },
    { id: 10, group: 0, content: "sdo", start: "2000-10-10" },
    { id: 11, group: 0, content: "cup", start: "2001-11-15" },
    { id: 12, group: 0, content: "lis", start: "2002-12-20" },
    { id: 13, group: 0, content: "sdo", start: "2003-01-25" },
    { id: 14, group: 0, content: "cup", start: "2004-02-10" },
    { id: 15, group: 0, content: "lis", start: "2005-03-15" },
    { id: 16, group: 0, content: "sdo", start: "2006-04-20" },
    { id: 17, group: 0, content: "cup", start: "2007-05-10" },
    { id: 18, group: 0, content: "lis", start: "2008-06-15" },
    { id: 19, group: 0, content: "sdo", start: "2009-07-20" },
    { id: 20, group: 0, content: "cup", start: "2010-08-10" },
    { id: 21, group: 0, content: "lis", start: "2011-09-15" },
    { id: 22, group: 0, content: "sdo", start: "2012-10-20" },
    { id: 23, group: 0, content: "cup", start: "2013-11-10" },
    { id: 24, group: 0, content: "lis", start: "2014-12-15" },
    { id: 25, group: 0, content: "sdo", start: "2015-01-20" },
    { id: 26, group: 0, content: "cup", start: "2016-02-10" },
    { id: 27, group: 0, content: "lis", start: "2017-03-15" },
    { id: 28, group: 0, content: "sdo", start: "2018-04-20" },
    { id: 29, group: 0, content: "cup", start: "2019-05-10" },
    { id: 30, group: 0, content: "lis", start: "2020-06-15" }
  ];
  

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const items = new DataSet(this.timelineItems);

    this.timelineInstance = new Timeline(this.timelineElement.nativeElement, items);

    this.renderer.listen(this.timelineElement.nativeElement, 'click', this.handleTimelineClick.bind(this));
  }

  handleTimelineClick(event: Event) {
    const eventProperties = this.timelineInstance.getEventProperties(event);
    console.log(eventProperties.item);

    const clickedItem = this.timelineItems.find(item => item.id === eventProperties.item);
    this.selectedItemDetails = clickedItem ? clickedItem : null;
  }
}

// https://visjs.github.io/vis-timeline/docs/timeline/
