/**
 * 宝可梦简要信息
 *
 * @export
 * @interface PokemonModel
 */
export interface PokemonModel {

  /**
   * ID
   *
   * @type {string}
   * @memberof PokemonModel
   */
  id: string;

  /**
   * 编号
   *
   * @type {number}
   * @memberof PokemonModel
   */
  index: number;

  /**
   * 名称
   *
   * @type {string}
   * @memberof PokemonModel
   */
  name: string;

  /**
   * 属性
   *
   * @type {string[]}
   * @memberof PokemonModel
   */
  types: string[];
}
