import {AppComponent} from './app.component';
import {render, screen} from "@testing-library/angular";

describe('AppComponent', () => {

  it('angular testing-librairy : should create the app', async () => {
    // render
    const {container} = await render(AppComponent, {
    });
    // assert
    expect(container).toBeTruthy();
  });

  it(`angular testing-librairy : should have as title 'event-manager-webadmin'`,async () => {
    // render
    await render(AppComponent, {
    });
    // retrieve
    const title = await screen.getByTestId('title');
    // assert
    expect((title as HTMLSpanElement).textContent).toStrictEqual('event-manager-webadmin app is running!');
  });
});
