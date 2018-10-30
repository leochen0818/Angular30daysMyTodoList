/**
 * 待辦事項的資料物件模型
 *
 * @export
 * @class Todo
 */
export class Todo {

  /**
   * 事項名稱
   *
   * @private
   * @memberof Todo
   */
  private title = '';

  /**
   * 完成與否
   *
   * @private
   * @memberof Todo
   */
  private completed = false;

  /**
   * Creates an instance of Todo.
   *
   * @param {string} title - 待辦事項的名稱
   * @memberof Todo
   */
  constructor(title: string) {
    this.title = title || '';
  }

  /**
   * 此事項是否已經完成
   *
   * @readonly
   * @type {boolean}
   * @memberof Todo
   */
  get done(): boolean {
    return this.completed;
  }

  /**
   * 取得事項名稱
   *
   * @returns {string}
   * @memberof Todo
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * 來回切換完成狀態
   *
   * @memberof Todo
   */
  toggleCompletion(): void {
    this.completed = !this.completed;
  }

}
