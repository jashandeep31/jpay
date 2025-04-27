
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Authenticator
 * 
 */
export type Authenticator = $Result.DefaultSelection<Prisma.$AuthenticatorPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model StableCoin
 * 
 */
export type StableCoin = $Result.DefaultSelection<Prisma.$StableCoinPayload>
/**
 * Model PaymentLink
 * 
 */
export type PaymentLink = $Result.DefaultSelection<Prisma.$PaymentLinkPayload>
/**
 * Model PaymentPage
 * 
 */
export type PaymentPage = $Result.DefaultSelection<Prisma.$PaymentPagePayload>
/**
 * Model IntiatedPayment
 * 
 */
export type IntiatedPayment = $Result.DefaultSelection<Prisma.$IntiatedPaymentPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model PaymentButton
 * 
 */
export type PaymentButton = $Result.DefaultSelection<Prisma.$PaymentButtonPayload>
/**
 * Model PaymentPageForm
 * 
 */
export type PaymentPageForm = $Result.DefaultSelection<Prisma.$PaymentPageFormPayload>
/**
 * Model PaymentPageFormField
 * 
 */
export type PaymentPageFormField = $Result.DefaultSelection<Prisma.$PaymentPageFormFieldPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentLinkStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type PaymentLinkStatus = (typeof PaymentLinkStatus)[keyof typeof PaymentLinkStatus]


export const PaymentPageStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type PaymentPageStatus = (typeof PaymentPageStatus)[keyof typeof PaymentPageStatus]


export const IntiatedFrom: {
  PAYMENT_PAGE: 'PAYMENT_PAGE',
  PAYMENT_LINK: 'PAYMENT_LINK'
};

export type IntiatedFrom = (typeof IntiatedFrom)[keyof typeof IntiatedFrom]


export const IntiatedPaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type IntiatedPaymentStatus = (typeof IntiatedPaymentStatus)[keyof typeof IntiatedPaymentStatus]


export const TransactionStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  REFUNDED: 'REFUNDED',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const PaymentButtonType: {
  QUICK_PAYMENT: 'QUICK_PAYMENT',
  DONATION: 'DONATION',
  OTHER: 'OTHER'
};

export type PaymentButtonType = (typeof PaymentButtonType)[keyof typeof PaymentButtonType]


export const PaymentPageFormFieldType: {
  TEXT: 'TEXT',
  NUMBER: 'NUMBER',
  EMAIL: 'EMAIL',
  PHONE: 'PHONE'
};

export type PaymentPageFormFieldType = (typeof PaymentPageFormFieldType)[keyof typeof PaymentPageFormFieldType]

}

export type PaymentLinkStatus = $Enums.PaymentLinkStatus

export const PaymentLinkStatus: typeof $Enums.PaymentLinkStatus

export type PaymentPageStatus = $Enums.PaymentPageStatus

export const PaymentPageStatus: typeof $Enums.PaymentPageStatus

export type IntiatedFrom = $Enums.IntiatedFrom

export const IntiatedFrom: typeof $Enums.IntiatedFrom

export type IntiatedPaymentStatus = $Enums.IntiatedPaymentStatus

export const IntiatedPaymentStatus: typeof $Enums.IntiatedPaymentStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type PaymentButtonType = $Enums.PaymentButtonType

export const PaymentButtonType: typeof $Enums.PaymentButtonType

export type PaymentPageFormFieldType = $Enums.PaymentPageFormFieldType

export const PaymentPageFormFieldType: typeof $Enums.PaymentPageFormFieldType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authenticator`: Exposes CRUD operations for the **Authenticator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authenticators
    * const authenticators = await prisma.authenticator.findMany()
    * ```
    */
  get authenticator(): Prisma.AuthenticatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stableCoin`: Exposes CRUD operations for the **StableCoin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StableCoins
    * const stableCoins = await prisma.stableCoin.findMany()
    * ```
    */
  get stableCoin(): Prisma.StableCoinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentLink`: Exposes CRUD operations for the **PaymentLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentLinks
    * const paymentLinks = await prisma.paymentLink.findMany()
    * ```
    */
  get paymentLink(): Prisma.PaymentLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentPage`: Exposes CRUD operations for the **PaymentPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentPages
    * const paymentPages = await prisma.paymentPage.findMany()
    * ```
    */
  get paymentPage(): Prisma.PaymentPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intiatedPayment`: Exposes CRUD operations for the **IntiatedPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntiatedPayments
    * const intiatedPayments = await prisma.intiatedPayment.findMany()
    * ```
    */
  get intiatedPayment(): Prisma.IntiatedPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentButton`: Exposes CRUD operations for the **PaymentButton** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentButtons
    * const paymentButtons = await prisma.paymentButton.findMany()
    * ```
    */
  get paymentButton(): Prisma.PaymentButtonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentPageForm`: Exposes CRUD operations for the **PaymentPageForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentPageForms
    * const paymentPageForms = await prisma.paymentPageForm.findMany()
    * ```
    */
  get paymentPageForm(): Prisma.PaymentPageFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentPageFormField`: Exposes CRUD operations for the **PaymentPageFormField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentPageFormFields
    * const paymentPageFormFields = await prisma.paymentPageFormField.findMany()
    * ```
    */
  get paymentPageFormField(): Prisma.PaymentPageFormFieldDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Authenticator: 'Authenticator',
    Wallet: 'Wallet',
    StableCoin: 'StableCoin',
    PaymentLink: 'PaymentLink',
    PaymentPage: 'PaymentPage',
    IntiatedPayment: 'IntiatedPayment',
    Transaction: 'Transaction',
    PaymentButton: 'PaymentButton',
    PaymentPageForm: 'PaymentPageForm',
    PaymentPageFormField: 'PaymentPageFormField'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "authenticator" | "wallet" | "stableCoin" | "paymentLink" | "paymentPage" | "intiatedPayment" | "transaction" | "paymentButton" | "paymentPageForm" | "paymentPageFormField"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Authenticator: {
        payload: Prisma.$AuthenticatorPayload<ExtArgs>
        fields: Prisma.AuthenticatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findFirst: {
            args: Prisma.AuthenticatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findMany: {
            args: Prisma.AuthenticatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          create: {
            args: Prisma.AuthenticatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          createMany: {
            args: Prisma.AuthenticatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthenticatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          delete: {
            args: Prisma.AuthenticatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          update: {
            args: Prisma.AuthenticatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthenticatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          upsert: {
            args: Prisma.AuthenticatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          aggregate: {
            args: Prisma.AuthenticatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthenticator>
          }
          groupBy: {
            args: Prisma.AuthenticatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticatorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      StableCoin: {
        payload: Prisma.$StableCoinPayload<ExtArgs>
        fields: Prisma.StableCoinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StableCoinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StableCoinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload>
          }
          findFirst: {
            args: Prisma.StableCoinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StableCoinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload>
          }
          findMany: {
            args: Prisma.StableCoinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload>[]
          }
          create: {
            args: Prisma.StableCoinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload>
          }
          createMany: {
            args: Prisma.StableCoinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StableCoinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload>[]
          }
          delete: {
            args: Prisma.StableCoinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload>
          }
          update: {
            args: Prisma.StableCoinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload>
          }
          deleteMany: {
            args: Prisma.StableCoinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StableCoinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StableCoinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload>[]
          }
          upsert: {
            args: Prisma.StableCoinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableCoinPayload>
          }
          aggregate: {
            args: Prisma.StableCoinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStableCoin>
          }
          groupBy: {
            args: Prisma.StableCoinGroupByArgs<ExtArgs>
            result: $Utils.Optional<StableCoinGroupByOutputType>[]
          }
          count: {
            args: Prisma.StableCoinCountArgs<ExtArgs>
            result: $Utils.Optional<StableCoinCountAggregateOutputType> | number
          }
        }
      }
      PaymentLink: {
        payload: Prisma.$PaymentLinkPayload<ExtArgs>
        fields: Prisma.PaymentLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          findFirst: {
            args: Prisma.PaymentLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          findMany: {
            args: Prisma.PaymentLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>[]
          }
          create: {
            args: Prisma.PaymentLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          createMany: {
            args: Prisma.PaymentLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>[]
          }
          delete: {
            args: Prisma.PaymentLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          update: {
            args: Prisma.PaymentLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          deleteMany: {
            args: Prisma.PaymentLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>[]
          }
          upsert: {
            args: Prisma.PaymentLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          aggregate: {
            args: Prisma.PaymentLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentLink>
          }
          groupBy: {
            args: Prisma.PaymentLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentLinkCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentLinkCountAggregateOutputType> | number
          }
        }
      }
      PaymentPage: {
        payload: Prisma.$PaymentPagePayload<ExtArgs>
        fields: Prisma.PaymentPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload>
          }
          findFirst: {
            args: Prisma.PaymentPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload>
          }
          findMany: {
            args: Prisma.PaymentPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload>[]
          }
          create: {
            args: Prisma.PaymentPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload>
          }
          createMany: {
            args: Prisma.PaymentPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload>[]
          }
          delete: {
            args: Prisma.PaymentPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload>
          }
          update: {
            args: Prisma.PaymentPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload>
          }
          deleteMany: {
            args: Prisma.PaymentPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload>[]
          }
          upsert: {
            args: Prisma.PaymentPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPagePayload>
          }
          aggregate: {
            args: Prisma.PaymentPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentPage>
          }
          groupBy: {
            args: Prisma.PaymentPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentPageCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentPageCountAggregateOutputType> | number
          }
        }
      }
      IntiatedPayment: {
        payload: Prisma.$IntiatedPaymentPayload<ExtArgs>
        fields: Prisma.IntiatedPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntiatedPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntiatedPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload>
          }
          findFirst: {
            args: Prisma.IntiatedPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntiatedPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload>
          }
          findMany: {
            args: Prisma.IntiatedPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload>[]
          }
          create: {
            args: Prisma.IntiatedPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload>
          }
          createMany: {
            args: Prisma.IntiatedPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntiatedPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload>[]
          }
          delete: {
            args: Prisma.IntiatedPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload>
          }
          update: {
            args: Prisma.IntiatedPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload>
          }
          deleteMany: {
            args: Prisma.IntiatedPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntiatedPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntiatedPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload>[]
          }
          upsert: {
            args: Prisma.IntiatedPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntiatedPaymentPayload>
          }
          aggregate: {
            args: Prisma.IntiatedPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntiatedPayment>
          }
          groupBy: {
            args: Prisma.IntiatedPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntiatedPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntiatedPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<IntiatedPaymentCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      PaymentButton: {
        payload: Prisma.$PaymentButtonPayload<ExtArgs>
        fields: Prisma.PaymentButtonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentButtonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentButtonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload>
          }
          findFirst: {
            args: Prisma.PaymentButtonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentButtonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload>
          }
          findMany: {
            args: Prisma.PaymentButtonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload>[]
          }
          create: {
            args: Prisma.PaymentButtonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload>
          }
          createMany: {
            args: Prisma.PaymentButtonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentButtonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload>[]
          }
          delete: {
            args: Prisma.PaymentButtonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload>
          }
          update: {
            args: Prisma.PaymentButtonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload>
          }
          deleteMany: {
            args: Prisma.PaymentButtonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentButtonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentButtonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload>[]
          }
          upsert: {
            args: Prisma.PaymentButtonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentButtonPayload>
          }
          aggregate: {
            args: Prisma.PaymentButtonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentButton>
          }
          groupBy: {
            args: Prisma.PaymentButtonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentButtonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentButtonCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentButtonCountAggregateOutputType> | number
          }
        }
      }
      PaymentPageForm: {
        payload: Prisma.$PaymentPageFormPayload<ExtArgs>
        fields: Prisma.PaymentPageFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentPageFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentPageFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload>
          }
          findFirst: {
            args: Prisma.PaymentPageFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentPageFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload>
          }
          findMany: {
            args: Prisma.PaymentPageFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload>[]
          }
          create: {
            args: Prisma.PaymentPageFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload>
          }
          createMany: {
            args: Prisma.PaymentPageFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentPageFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload>[]
          }
          delete: {
            args: Prisma.PaymentPageFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload>
          }
          update: {
            args: Prisma.PaymentPageFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload>
          }
          deleteMany: {
            args: Prisma.PaymentPageFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentPageFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentPageFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload>[]
          }
          upsert: {
            args: Prisma.PaymentPageFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormPayload>
          }
          aggregate: {
            args: Prisma.PaymentPageFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentPageForm>
          }
          groupBy: {
            args: Prisma.PaymentPageFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentPageFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentPageFormCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentPageFormCountAggregateOutputType> | number
          }
        }
      }
      PaymentPageFormField: {
        payload: Prisma.$PaymentPageFormFieldPayload<ExtArgs>
        fields: Prisma.PaymentPageFormFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentPageFormFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentPageFormFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload>
          }
          findFirst: {
            args: Prisma.PaymentPageFormFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentPageFormFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload>
          }
          findMany: {
            args: Prisma.PaymentPageFormFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload>[]
          }
          create: {
            args: Prisma.PaymentPageFormFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload>
          }
          createMany: {
            args: Prisma.PaymentPageFormFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentPageFormFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload>[]
          }
          delete: {
            args: Prisma.PaymentPageFormFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload>
          }
          update: {
            args: Prisma.PaymentPageFormFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload>
          }
          deleteMany: {
            args: Prisma.PaymentPageFormFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentPageFormFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentPageFormFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload>[]
          }
          upsert: {
            args: Prisma.PaymentPageFormFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPageFormFieldPayload>
          }
          aggregate: {
            args: Prisma.PaymentPageFormFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentPageFormField>
          }
          groupBy: {
            args: Prisma.PaymentPageFormFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentPageFormFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentPageFormFieldCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentPageFormFieldCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    authenticator?: AuthenticatorOmit
    wallet?: WalletOmit
    stableCoin?: StableCoinOmit
    paymentLink?: PaymentLinkOmit
    paymentPage?: PaymentPageOmit
    intiatedPayment?: IntiatedPaymentOmit
    transaction?: TransactionOmit
    paymentButton?: PaymentButtonOmit
    paymentPageForm?: PaymentPageFormOmit
    paymentPageFormField?: PaymentPageFormFieldOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    Authenticator: number
    PaymentLink: number
    Wallet: number
    PaymentPage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    Authenticator?: boolean | UserCountOutputTypeCountAuthenticatorArgs
    PaymentLink?: boolean | UserCountOutputTypeCountPaymentLinkArgs
    Wallet?: boolean | UserCountOutputTypeCountWalletArgs
    PaymentPage?: boolean | UserCountOutputTypeCountPaymentPageArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthenticatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentLinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentPageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPageWhereInput
  }


  /**
   * Count Type StableCoinCountOutputType
   */

  export type StableCoinCountOutputType = {
    Wallet: number
  }

  export type StableCoinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Wallet?: boolean | StableCoinCountOutputTypeCountWalletArgs
  }

  // Custom InputTypes
  /**
   * StableCoinCountOutputType without action
   */
  export type StableCoinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoinCountOutputType
     */
    select?: StableCoinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StableCoinCountOutputType without action
   */
  export type StableCoinCountOutputTypeCountWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
  }


  /**
   * Count Type PaymentLinkCountOutputType
   */

  export type PaymentLinkCountOutputType = {
    IntiatedPayment: number
  }

  export type PaymentLinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    IntiatedPayment?: boolean | PaymentLinkCountOutputTypeCountIntiatedPaymentArgs
  }

  // Custom InputTypes
  /**
   * PaymentLinkCountOutputType without action
   */
  export type PaymentLinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLinkCountOutputType
     */
    select?: PaymentLinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentLinkCountOutputType without action
   */
  export type PaymentLinkCountOutputTypeCountIntiatedPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntiatedPaymentWhereInput
  }


  /**
   * Count Type PaymentPageCountOutputType
   */

  export type PaymentPageCountOutputType = {
    IntiatedPayment: number
    PaymentPageForm: number
  }

  export type PaymentPageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    IntiatedPayment?: boolean | PaymentPageCountOutputTypeCountIntiatedPaymentArgs
    PaymentPageForm?: boolean | PaymentPageCountOutputTypeCountPaymentPageFormArgs
  }

  // Custom InputTypes
  /**
   * PaymentPageCountOutputType without action
   */
  export type PaymentPageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageCountOutputType
     */
    select?: PaymentPageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentPageCountOutputType without action
   */
  export type PaymentPageCountOutputTypeCountIntiatedPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntiatedPaymentWhereInput
  }

  /**
   * PaymentPageCountOutputType without action
   */
  export type PaymentPageCountOutputTypeCountPaymentPageFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPageFormWhereInput
  }


  /**
   * Count Type IntiatedPaymentCountOutputType
   */

  export type IntiatedPaymentCountOutputType = {
    Transaction: number
  }

  export type IntiatedPaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | IntiatedPaymentCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * IntiatedPaymentCountOutputType without action
   */
  export type IntiatedPaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPaymentCountOutputType
     */
    select?: IntiatedPaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IntiatedPaymentCountOutputType without action
   */
  export type IntiatedPaymentCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type PaymentPageFormCountOutputType
   */

  export type PaymentPageFormCountOutputType = {
    PaymentPageFormField: number
  }

  export type PaymentPageFormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PaymentPageFormField?: boolean | PaymentPageFormCountOutputTypeCountPaymentPageFormFieldArgs
  }

  // Custom InputTypes
  /**
   * PaymentPageFormCountOutputType without action
   */
  export type PaymentPageFormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormCountOutputType
     */
    select?: PaymentPageFormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentPageFormCountOutputType without action
   */
  export type PaymentPageFormCountOutputTypeCountPaymentPageFormFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPageFormFieldWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
    PaymentLink?: boolean | User$PaymentLinkArgs<ExtArgs>
    Wallet?: boolean | User$WalletArgs<ExtArgs>
    PaymentPage?: boolean | User$PaymentPageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
    PaymentLink?: boolean | User$PaymentLinkArgs<ExtArgs>
    Wallet?: boolean | User$WalletArgs<ExtArgs>
    PaymentPage?: boolean | User$PaymentPageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      Authenticator: Prisma.$AuthenticatorPayload<ExtArgs>[]
      PaymentLink: Prisma.$PaymentLinkPayload<ExtArgs>[]
      Wallet: Prisma.$WalletPayload<ExtArgs>[]
      PaymentPage: Prisma.$PaymentPagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Authenticator<T extends User$AuthenticatorArgs<ExtArgs> = {}>(args?: Subset<T, User$AuthenticatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PaymentLink<T extends User$PaymentLinkArgs<ExtArgs> = {}>(args?: Subset<T, User$PaymentLinkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Wallet<T extends User$WalletArgs<ExtArgs> = {}>(args?: Subset<T, User$WalletArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PaymentPage<T extends User$PaymentPageArgs<ExtArgs> = {}>(args?: Subset<T, User$PaymentPageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Authenticator
   */
  export type User$AuthenticatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    cursor?: AuthenticatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * User.PaymentLink
   */
  export type User$PaymentLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    where?: PaymentLinkWhereInput
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    cursor?: PaymentLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentLinkScalarFieldEnum | PaymentLinkScalarFieldEnum[]
  }

  /**
   * User.Wallet
   */
  export type User$WalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    cursor?: WalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * User.PaymentPage
   */
  export type User$PaymentPageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    where?: PaymentPageWhereInput
    orderBy?: PaymentPageOrderByWithRelationInput | PaymentPageOrderByWithRelationInput[]
    cursor?: PaymentPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentPageScalarFieldEnum | PaymentPageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Authenticator
   */

  export type AggregateAuthenticator = {
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  export type AuthenticatorAvgAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorSumAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorMinAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorMaxAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorCountAggregateOutputType = {
    credentialID: number
    userId: number
    providerAccountId: number
    credentialPublicKey: number
    counter: number
    credentialDeviceType: number
    credentialBackedUp: number
    transports: number
    _all: number
  }


  export type AuthenticatorAvgAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorSumAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorMinAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorMaxAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorCountAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
    _all?: true
  }

  export type AuthenticatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticator to aggregate.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authenticators
    **/
    _count?: true | AuthenticatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthenticatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthenticatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type GetAuthenticatorAggregateType<T extends AuthenticatorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticator[P]>
      : GetScalarType<T[P], AggregateAuthenticator[P]>
  }




  export type AuthenticatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithAggregationInput | AuthenticatorOrderByWithAggregationInput[]
    by: AuthenticatorScalarFieldEnum[] | AuthenticatorScalarFieldEnum
    having?: AuthenticatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticatorCountAggregateInputType | true
    _avg?: AuthenticatorAvgAggregateInputType
    _sum?: AuthenticatorSumAggregateInputType
    _min?: AuthenticatorMinAggregateInputType
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type AuthenticatorGroupByOutputType = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports: string | null
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  type GetAuthenticatorGroupByPayload<T extends AuthenticatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>

  export type AuthenticatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>

  export type AuthenticatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>

  export type AuthenticatorSelectScalar = {
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
  }

  export type AuthenticatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"credentialID" | "userId" | "providerAccountId" | "credentialPublicKey" | "counter" | "credentialDeviceType" | "credentialBackedUp" | "transports", ExtArgs["result"]["authenticator"]>
  export type AuthenticatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthenticatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthenticatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthenticatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authenticator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      credentialID: string
      userId: string
      providerAccountId: string
      credentialPublicKey: string
      counter: number
      credentialDeviceType: string
      credentialBackedUp: boolean
      transports: string | null
    }, ExtArgs["result"]["authenticator"]>
    composites: {}
  }

  type AuthenticatorGetPayload<S extends boolean | null | undefined | AuthenticatorDefaultArgs> = $Result.GetResult<Prisma.$AuthenticatorPayload, S>

  type AuthenticatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticatorCountAggregateInputType | true
    }

  export interface AuthenticatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authenticator'], meta: { name: 'Authenticator' } }
    /**
     * Find zero or one Authenticator that matches the filter.
     * @param {AuthenticatorFindUniqueArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticatorFindUniqueArgs>(args: SelectSubset<T, AuthenticatorFindUniqueArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authenticator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticatorFindUniqueOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticatorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthenticatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticatorFindFirstArgs>(args?: SelectSubset<T, AuthenticatorFindFirstArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticatorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthenticatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authenticators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authenticators
     * const authenticators = await prisma.authenticator.findMany()
     * 
     * // Get first 10 Authenticators
     * const authenticators = await prisma.authenticator.findMany({ take: 10 })
     * 
     * // Only select the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.findMany({ select: { credentialID: true } })
     * 
     */
    findMany<T extends AuthenticatorFindManyArgs>(args?: SelectSubset<T, AuthenticatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authenticator.
     * @param {AuthenticatorCreateArgs} args - Arguments to create a Authenticator.
     * @example
     * // Create one Authenticator
     * const Authenticator = await prisma.authenticator.create({
     *   data: {
     *     // ... data to create a Authenticator
     *   }
     * })
     * 
     */
    create<T extends AuthenticatorCreateArgs>(args: SelectSubset<T, AuthenticatorCreateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authenticators.
     * @param {AuthenticatorCreateManyArgs} args - Arguments to create many Authenticators.
     * @example
     * // Create many Authenticators
     * const authenticator = await prisma.authenticator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthenticatorCreateManyArgs>(args?: SelectSubset<T, AuthenticatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authenticators and returns the data saved in the database.
     * @param {AuthenticatorCreateManyAndReturnArgs} args - Arguments to create many Authenticators.
     * @example
     * // Create many Authenticators
     * const authenticator = await prisma.authenticator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authenticators and only return the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.createManyAndReturn({
     *   select: { credentialID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthenticatorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthenticatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authenticator.
     * @param {AuthenticatorDeleteArgs} args - Arguments to delete one Authenticator.
     * @example
     * // Delete one Authenticator
     * const Authenticator = await prisma.authenticator.delete({
     *   where: {
     *     // ... filter to delete one Authenticator
     *   }
     * })
     * 
     */
    delete<T extends AuthenticatorDeleteArgs>(args: SelectSubset<T, AuthenticatorDeleteArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authenticator.
     * @param {AuthenticatorUpdateArgs} args - Arguments to update one Authenticator.
     * @example
     * // Update one Authenticator
     * const authenticator = await prisma.authenticator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthenticatorUpdateArgs>(args: SelectSubset<T, AuthenticatorUpdateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authenticators.
     * @param {AuthenticatorDeleteManyArgs} args - Arguments to filter Authenticators to delete.
     * @example
     * // Delete a few Authenticators
     * const { count } = await prisma.authenticator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthenticatorDeleteManyArgs>(args?: SelectSubset<T, AuthenticatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthenticatorUpdateManyArgs>(args: SelectSubset<T, AuthenticatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticators and returns the data updated in the database.
     * @param {AuthenticatorUpdateManyAndReturnArgs} args - Arguments to update many Authenticators.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authenticators and only return the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.updateManyAndReturn({
     *   select: { credentialID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthenticatorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthenticatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authenticator.
     * @param {AuthenticatorUpsertArgs} args - Arguments to update or create a Authenticator.
     * @example
     * // Update or create a Authenticator
     * const authenticator = await prisma.authenticator.upsert({
     *   create: {
     *     // ... data to create a Authenticator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authenticator we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticatorUpsertArgs>(args: SelectSubset<T, AuthenticatorUpsertArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorCountArgs} args - Arguments to filter Authenticators to count.
     * @example
     * // Count the number of Authenticators
     * const count = await prisma.authenticator.count({
     *   where: {
     *     // ... the filter for the Authenticators we want to count
     *   }
     * })
    **/
    count<T extends AuthenticatorCountArgs>(
      args?: Subset<T, AuthenticatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthenticatorAggregateArgs>(args: Subset<T, AuthenticatorAggregateArgs>): Prisma.PrismaPromise<GetAuthenticatorAggregateType<T>>

    /**
     * Group by Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthenticatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatorGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthenticatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authenticator model
   */
  readonly fields: AuthenticatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authenticator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Authenticator model
   */
  interface AuthenticatorFieldRefs {
    readonly credentialID: FieldRef<"Authenticator", 'String'>
    readonly userId: FieldRef<"Authenticator", 'String'>
    readonly providerAccountId: FieldRef<"Authenticator", 'String'>
    readonly credentialPublicKey: FieldRef<"Authenticator", 'String'>
    readonly counter: FieldRef<"Authenticator", 'Int'>
    readonly credentialDeviceType: FieldRef<"Authenticator", 'String'>
    readonly credentialBackedUp: FieldRef<"Authenticator", 'Boolean'>
    readonly transports: FieldRef<"Authenticator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Authenticator findUnique
   */
  export type AuthenticatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findUniqueOrThrow
   */
  export type AuthenticatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findFirst
   */
  export type AuthenticatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findFirstOrThrow
   */
  export type AuthenticatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findMany
   */
  export type AuthenticatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticators to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator create
   */
  export type AuthenticatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Authenticator.
     */
    data: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
  }

  /**
   * Authenticator createMany
   */
  export type AuthenticatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authenticators.
     */
    data: AuthenticatorCreateManyInput | AuthenticatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authenticator createManyAndReturn
   */
  export type AuthenticatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * The data used to create many Authenticators.
     */
    data: AuthenticatorCreateManyInput | AuthenticatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authenticator update
   */
  export type AuthenticatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Authenticator.
     */
    data: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
    /**
     * Choose, which Authenticator to update.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator updateMany
   */
  export type AuthenticatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authenticators.
     */
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyInput>
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to update.
     */
    limit?: number
  }

  /**
   * Authenticator updateManyAndReturn
   */
  export type AuthenticatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * The data used to update Authenticators.
     */
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyInput>
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authenticator upsert
   */
  export type AuthenticatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Authenticator to update in case it exists.
     */
    where: AuthenticatorWhereUniqueInput
    /**
     * In case the Authenticator found by the `where` argument doesn't exist, create a new Authenticator with this data.
     */
    create: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
    /**
     * In case the Authenticator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
  }

  /**
   * Authenticator delete
   */
  export type AuthenticatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter which Authenticator to delete.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator deleteMany
   */
  export type AuthenticatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticators to delete
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to delete.
     */
    limit?: number
  }

  /**
   * Authenticator without action
   */
  export type AuthenticatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type WalletSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    balance: Decimal | null
    userId: string | null
    stableCoinId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    balance: Decimal | null
    userId: string | null
    stableCoinId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    balance: number
    userId: number
    stableCoinId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    balance?: true
  }

  export type WalletSumAggregateInputType = {
    balance?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    balance?: true
    userId?: true
    stableCoinId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    balance?: true
    userId?: true
    stableCoinId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    balance?: true
    userId?: true
    stableCoinId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    balance: Decimal
    userId: string
    stableCoinId: string
    createdAt: Date
    updatedAt: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userId?: boolean
    stableCoinId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stableCoin?: boolean | StableCoinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userId?: boolean
    stableCoinId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stableCoin?: boolean | StableCoinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userId?: boolean
    stableCoinId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stableCoin?: boolean | StableCoinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    balance?: boolean
    userId?: boolean
    stableCoinId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "userId" | "stableCoinId" | "createdAt" | "updatedAt", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stableCoin?: boolean | StableCoinDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stableCoin?: boolean | StableCoinDefaultArgs<ExtArgs>
  }
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stableCoin?: boolean | StableCoinDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      stableCoin: Prisma.$StableCoinPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: Prisma.Decimal
      userId: string
      stableCoinId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stableCoin<T extends StableCoinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StableCoinDefaultArgs<ExtArgs>>): Prisma__StableCoinClient<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'String'>
    readonly balance: FieldRef<"Wallet", 'Decimal'>
    readonly userId: FieldRef<"Wallet", 'String'>
    readonly stableCoinId: FieldRef<"Wallet", 'String'>
    readonly createdAt: FieldRef<"Wallet", 'DateTime'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model StableCoin
   */

  export type AggregateStableCoin = {
    _count: StableCoinCountAggregateOutputType | null
    _min: StableCoinMinAggregateOutputType | null
    _max: StableCoinMaxAggregateOutputType | null
  }

  export type StableCoinMinAggregateOutputType = {
    id: string | null
    name: string | null
    symbol: string | null
    logoUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StableCoinMaxAggregateOutputType = {
    id: string | null
    name: string | null
    symbol: string | null
    logoUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StableCoinCountAggregateOutputType = {
    id: number
    name: number
    symbol: number
    logoUrl: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StableCoinMinAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    logoUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StableCoinMaxAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    logoUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StableCoinCountAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    logoUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StableCoinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StableCoin to aggregate.
     */
    where?: StableCoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StableCoins to fetch.
     */
    orderBy?: StableCoinOrderByWithRelationInput | StableCoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StableCoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StableCoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StableCoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StableCoins
    **/
    _count?: true | StableCoinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StableCoinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StableCoinMaxAggregateInputType
  }

  export type GetStableCoinAggregateType<T extends StableCoinAggregateArgs> = {
        [P in keyof T & keyof AggregateStableCoin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStableCoin[P]>
      : GetScalarType<T[P], AggregateStableCoin[P]>
  }




  export type StableCoinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StableCoinWhereInput
    orderBy?: StableCoinOrderByWithAggregationInput | StableCoinOrderByWithAggregationInput[]
    by: StableCoinScalarFieldEnum[] | StableCoinScalarFieldEnum
    having?: StableCoinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StableCoinCountAggregateInputType | true
    _min?: StableCoinMinAggregateInputType
    _max?: StableCoinMaxAggregateInputType
  }

  export type StableCoinGroupByOutputType = {
    id: string
    name: string
    symbol: string
    logoUrl: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: StableCoinCountAggregateOutputType | null
    _min: StableCoinMinAggregateOutputType | null
    _max: StableCoinMaxAggregateOutputType | null
  }

  type GetStableCoinGroupByPayload<T extends StableCoinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StableCoinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StableCoinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StableCoinGroupByOutputType[P]>
            : GetScalarType<T[P], StableCoinGroupByOutputType[P]>
        }
      >
    >


  export type StableCoinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    logoUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Wallet?: boolean | StableCoin$WalletArgs<ExtArgs>
    _count?: boolean | StableCoinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stableCoin"]>

  export type StableCoinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    logoUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stableCoin"]>

  export type StableCoinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    logoUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stableCoin"]>

  export type StableCoinSelectScalar = {
    id?: boolean
    name?: boolean
    symbol?: boolean
    logoUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StableCoinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "symbol" | "logoUrl" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["stableCoin"]>
  export type StableCoinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Wallet?: boolean | StableCoin$WalletArgs<ExtArgs>
    _count?: boolean | StableCoinCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StableCoinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StableCoinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StableCoinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StableCoin"
    objects: {
      Wallet: Prisma.$WalletPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      symbol: string
      logoUrl: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stableCoin"]>
    composites: {}
  }

  type StableCoinGetPayload<S extends boolean | null | undefined | StableCoinDefaultArgs> = $Result.GetResult<Prisma.$StableCoinPayload, S>

  type StableCoinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StableCoinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StableCoinCountAggregateInputType | true
    }

  export interface StableCoinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StableCoin'], meta: { name: 'StableCoin' } }
    /**
     * Find zero or one StableCoin that matches the filter.
     * @param {StableCoinFindUniqueArgs} args - Arguments to find a StableCoin
     * @example
     * // Get one StableCoin
     * const stableCoin = await prisma.stableCoin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StableCoinFindUniqueArgs>(args: SelectSubset<T, StableCoinFindUniqueArgs<ExtArgs>>): Prisma__StableCoinClient<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StableCoin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StableCoinFindUniqueOrThrowArgs} args - Arguments to find a StableCoin
     * @example
     * // Get one StableCoin
     * const stableCoin = await prisma.stableCoin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StableCoinFindUniqueOrThrowArgs>(args: SelectSubset<T, StableCoinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StableCoinClient<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StableCoin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableCoinFindFirstArgs} args - Arguments to find a StableCoin
     * @example
     * // Get one StableCoin
     * const stableCoin = await prisma.stableCoin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StableCoinFindFirstArgs>(args?: SelectSubset<T, StableCoinFindFirstArgs<ExtArgs>>): Prisma__StableCoinClient<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StableCoin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableCoinFindFirstOrThrowArgs} args - Arguments to find a StableCoin
     * @example
     * // Get one StableCoin
     * const stableCoin = await prisma.stableCoin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StableCoinFindFirstOrThrowArgs>(args?: SelectSubset<T, StableCoinFindFirstOrThrowArgs<ExtArgs>>): Prisma__StableCoinClient<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StableCoins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableCoinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StableCoins
     * const stableCoins = await prisma.stableCoin.findMany()
     * 
     * // Get first 10 StableCoins
     * const stableCoins = await prisma.stableCoin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stableCoinWithIdOnly = await prisma.stableCoin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StableCoinFindManyArgs>(args?: SelectSubset<T, StableCoinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StableCoin.
     * @param {StableCoinCreateArgs} args - Arguments to create a StableCoin.
     * @example
     * // Create one StableCoin
     * const StableCoin = await prisma.stableCoin.create({
     *   data: {
     *     // ... data to create a StableCoin
     *   }
     * })
     * 
     */
    create<T extends StableCoinCreateArgs>(args: SelectSubset<T, StableCoinCreateArgs<ExtArgs>>): Prisma__StableCoinClient<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StableCoins.
     * @param {StableCoinCreateManyArgs} args - Arguments to create many StableCoins.
     * @example
     * // Create many StableCoins
     * const stableCoin = await prisma.stableCoin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StableCoinCreateManyArgs>(args?: SelectSubset<T, StableCoinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StableCoins and returns the data saved in the database.
     * @param {StableCoinCreateManyAndReturnArgs} args - Arguments to create many StableCoins.
     * @example
     * // Create many StableCoins
     * const stableCoin = await prisma.stableCoin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StableCoins and only return the `id`
     * const stableCoinWithIdOnly = await prisma.stableCoin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StableCoinCreateManyAndReturnArgs>(args?: SelectSubset<T, StableCoinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StableCoin.
     * @param {StableCoinDeleteArgs} args - Arguments to delete one StableCoin.
     * @example
     * // Delete one StableCoin
     * const StableCoin = await prisma.stableCoin.delete({
     *   where: {
     *     // ... filter to delete one StableCoin
     *   }
     * })
     * 
     */
    delete<T extends StableCoinDeleteArgs>(args: SelectSubset<T, StableCoinDeleteArgs<ExtArgs>>): Prisma__StableCoinClient<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StableCoin.
     * @param {StableCoinUpdateArgs} args - Arguments to update one StableCoin.
     * @example
     * // Update one StableCoin
     * const stableCoin = await prisma.stableCoin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StableCoinUpdateArgs>(args: SelectSubset<T, StableCoinUpdateArgs<ExtArgs>>): Prisma__StableCoinClient<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StableCoins.
     * @param {StableCoinDeleteManyArgs} args - Arguments to filter StableCoins to delete.
     * @example
     * // Delete a few StableCoins
     * const { count } = await prisma.stableCoin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StableCoinDeleteManyArgs>(args?: SelectSubset<T, StableCoinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StableCoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableCoinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StableCoins
     * const stableCoin = await prisma.stableCoin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StableCoinUpdateManyArgs>(args: SelectSubset<T, StableCoinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StableCoins and returns the data updated in the database.
     * @param {StableCoinUpdateManyAndReturnArgs} args - Arguments to update many StableCoins.
     * @example
     * // Update many StableCoins
     * const stableCoin = await prisma.stableCoin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StableCoins and only return the `id`
     * const stableCoinWithIdOnly = await prisma.stableCoin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StableCoinUpdateManyAndReturnArgs>(args: SelectSubset<T, StableCoinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StableCoin.
     * @param {StableCoinUpsertArgs} args - Arguments to update or create a StableCoin.
     * @example
     * // Update or create a StableCoin
     * const stableCoin = await prisma.stableCoin.upsert({
     *   create: {
     *     // ... data to create a StableCoin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StableCoin we want to update
     *   }
     * })
     */
    upsert<T extends StableCoinUpsertArgs>(args: SelectSubset<T, StableCoinUpsertArgs<ExtArgs>>): Prisma__StableCoinClient<$Result.GetResult<Prisma.$StableCoinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StableCoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableCoinCountArgs} args - Arguments to filter StableCoins to count.
     * @example
     * // Count the number of StableCoins
     * const count = await prisma.stableCoin.count({
     *   where: {
     *     // ... the filter for the StableCoins we want to count
     *   }
     * })
    **/
    count<T extends StableCoinCountArgs>(
      args?: Subset<T, StableCoinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StableCoinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StableCoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableCoinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StableCoinAggregateArgs>(args: Subset<T, StableCoinAggregateArgs>): Prisma.PrismaPromise<GetStableCoinAggregateType<T>>

    /**
     * Group by StableCoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableCoinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StableCoinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StableCoinGroupByArgs['orderBy'] }
        : { orderBy?: StableCoinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StableCoinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStableCoinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StableCoin model
   */
  readonly fields: StableCoinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StableCoin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StableCoinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Wallet<T extends StableCoin$WalletArgs<ExtArgs> = {}>(args?: Subset<T, StableCoin$WalletArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StableCoin model
   */
  interface StableCoinFieldRefs {
    readonly id: FieldRef<"StableCoin", 'String'>
    readonly name: FieldRef<"StableCoin", 'String'>
    readonly symbol: FieldRef<"StableCoin", 'String'>
    readonly logoUrl: FieldRef<"StableCoin", 'String'>
    readonly description: FieldRef<"StableCoin", 'String'>
    readonly createdAt: FieldRef<"StableCoin", 'DateTime'>
    readonly updatedAt: FieldRef<"StableCoin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StableCoin findUnique
   */
  export type StableCoinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
    /**
     * Filter, which StableCoin to fetch.
     */
    where: StableCoinWhereUniqueInput
  }

  /**
   * StableCoin findUniqueOrThrow
   */
  export type StableCoinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
    /**
     * Filter, which StableCoin to fetch.
     */
    where: StableCoinWhereUniqueInput
  }

  /**
   * StableCoin findFirst
   */
  export type StableCoinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
    /**
     * Filter, which StableCoin to fetch.
     */
    where?: StableCoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StableCoins to fetch.
     */
    orderBy?: StableCoinOrderByWithRelationInput | StableCoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StableCoins.
     */
    cursor?: StableCoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StableCoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StableCoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StableCoins.
     */
    distinct?: StableCoinScalarFieldEnum | StableCoinScalarFieldEnum[]
  }

  /**
   * StableCoin findFirstOrThrow
   */
  export type StableCoinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
    /**
     * Filter, which StableCoin to fetch.
     */
    where?: StableCoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StableCoins to fetch.
     */
    orderBy?: StableCoinOrderByWithRelationInput | StableCoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StableCoins.
     */
    cursor?: StableCoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StableCoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StableCoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StableCoins.
     */
    distinct?: StableCoinScalarFieldEnum | StableCoinScalarFieldEnum[]
  }

  /**
   * StableCoin findMany
   */
  export type StableCoinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
    /**
     * Filter, which StableCoins to fetch.
     */
    where?: StableCoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StableCoins to fetch.
     */
    orderBy?: StableCoinOrderByWithRelationInput | StableCoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StableCoins.
     */
    cursor?: StableCoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StableCoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StableCoins.
     */
    skip?: number
    distinct?: StableCoinScalarFieldEnum | StableCoinScalarFieldEnum[]
  }

  /**
   * StableCoin create
   */
  export type StableCoinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
    /**
     * The data needed to create a StableCoin.
     */
    data: XOR<StableCoinCreateInput, StableCoinUncheckedCreateInput>
  }

  /**
   * StableCoin createMany
   */
  export type StableCoinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StableCoins.
     */
    data: StableCoinCreateManyInput | StableCoinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StableCoin createManyAndReturn
   */
  export type StableCoinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * The data used to create many StableCoins.
     */
    data: StableCoinCreateManyInput | StableCoinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StableCoin update
   */
  export type StableCoinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
    /**
     * The data needed to update a StableCoin.
     */
    data: XOR<StableCoinUpdateInput, StableCoinUncheckedUpdateInput>
    /**
     * Choose, which StableCoin to update.
     */
    where: StableCoinWhereUniqueInput
  }

  /**
   * StableCoin updateMany
   */
  export type StableCoinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StableCoins.
     */
    data: XOR<StableCoinUpdateManyMutationInput, StableCoinUncheckedUpdateManyInput>
    /**
     * Filter which StableCoins to update
     */
    where?: StableCoinWhereInput
    /**
     * Limit how many StableCoins to update.
     */
    limit?: number
  }

  /**
   * StableCoin updateManyAndReturn
   */
  export type StableCoinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * The data used to update StableCoins.
     */
    data: XOR<StableCoinUpdateManyMutationInput, StableCoinUncheckedUpdateManyInput>
    /**
     * Filter which StableCoins to update
     */
    where?: StableCoinWhereInput
    /**
     * Limit how many StableCoins to update.
     */
    limit?: number
  }

  /**
   * StableCoin upsert
   */
  export type StableCoinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
    /**
     * The filter to search for the StableCoin to update in case it exists.
     */
    where: StableCoinWhereUniqueInput
    /**
     * In case the StableCoin found by the `where` argument doesn't exist, create a new StableCoin with this data.
     */
    create: XOR<StableCoinCreateInput, StableCoinUncheckedCreateInput>
    /**
     * In case the StableCoin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StableCoinUpdateInput, StableCoinUncheckedUpdateInput>
  }

  /**
   * StableCoin delete
   */
  export type StableCoinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
    /**
     * Filter which StableCoin to delete.
     */
    where: StableCoinWhereUniqueInput
  }

  /**
   * StableCoin deleteMany
   */
  export type StableCoinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StableCoins to delete
     */
    where?: StableCoinWhereInput
    /**
     * Limit how many StableCoins to delete.
     */
    limit?: number
  }

  /**
   * StableCoin.Wallet
   */
  export type StableCoin$WalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    cursor?: WalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * StableCoin without action
   */
  export type StableCoinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCoin
     */
    select?: StableCoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableCoin
     */
    omit?: StableCoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableCoinInclude<ExtArgs> | null
  }


  /**
   * Model PaymentLink
   */

  export type AggregatePaymentLink = {
    _count: PaymentLinkCountAggregateOutputType | null
    _avg: PaymentLinkAvgAggregateOutputType | null
    _sum: PaymentLinkSumAggregateOutputType | null
    _min: PaymentLinkMinAggregateOutputType | null
    _max: PaymentLinkMaxAggregateOutputType | null
  }

  export type PaymentLinkAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentLinkSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentLinkMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    status: $Enums.PaymentLinkStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    description: string | null
    userId: string | null
  }

  export type PaymentLinkMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    status: $Enums.PaymentLinkStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    description: string | null
    userId: string | null
  }

  export type PaymentLinkCountAggregateOutputType = {
    id: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    description: number
    userId: number
    _all: number
  }


  export type PaymentLinkAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentLinkSumAggregateInputType = {
    amount?: true
  }

  export type PaymentLinkMinAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    description?: true
    userId?: true
  }

  export type PaymentLinkMaxAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    description?: true
    userId?: true
  }

  export type PaymentLinkCountAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type PaymentLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentLink to aggregate.
     */
    where?: PaymentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLinks to fetch.
     */
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentLinks
    **/
    _count?: true | PaymentLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentLinkMaxAggregateInputType
  }

  export type GetPaymentLinkAggregateType<T extends PaymentLinkAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentLink[P]>
      : GetScalarType<T[P], AggregatePaymentLink[P]>
  }




  export type PaymentLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentLinkWhereInput
    orderBy?: PaymentLinkOrderByWithAggregationInput | PaymentLinkOrderByWithAggregationInput[]
    by: PaymentLinkScalarFieldEnum[] | PaymentLinkScalarFieldEnum
    having?: PaymentLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentLinkCountAggregateInputType | true
    _avg?: PaymentLinkAvgAggregateInputType
    _sum?: PaymentLinkSumAggregateInputType
    _min?: PaymentLinkMinAggregateInputType
    _max?: PaymentLinkMaxAggregateInputType
  }

  export type PaymentLinkGroupByOutputType = {
    id: string
    amount: Decimal
    status: $Enums.PaymentLinkStatus
    createdAt: Date
    updatedAt: Date
    expiresAt: Date | null
    description: string | null
    userId: string
    _count: PaymentLinkCountAggregateOutputType | null
    _avg: PaymentLinkAvgAggregateOutputType | null
    _sum: PaymentLinkSumAggregateOutputType | null
    _min: PaymentLinkMinAggregateOutputType | null
    _max: PaymentLinkMaxAggregateOutputType | null
  }

  type GetPaymentLinkGroupByPayload<T extends PaymentLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentLinkGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentLinkGroupByOutputType[P]>
        }
      >
    >


  export type PaymentLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    IntiatedPayment?: boolean | PaymentLink$IntiatedPaymentArgs<ExtArgs>
    _count?: boolean | PaymentLinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLink"]>

  export type PaymentLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLink"]>

  export type PaymentLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLink"]>

  export type PaymentLinkSelectScalar = {
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    description?: boolean
    userId?: boolean
  }

  export type PaymentLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "status" | "createdAt" | "updatedAt" | "expiresAt" | "description" | "userId", ExtArgs["result"]["paymentLink"]>
  export type PaymentLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    IntiatedPayment?: boolean | PaymentLink$IntiatedPaymentArgs<ExtArgs>
    _count?: boolean | PaymentLinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentLink"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      IntiatedPayment: Prisma.$IntiatedPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      status: $Enums.PaymentLinkStatus
      createdAt: Date
      updatedAt: Date
      expiresAt: Date | null
      description: string | null
      userId: string
    }, ExtArgs["result"]["paymentLink"]>
    composites: {}
  }

  type PaymentLinkGetPayload<S extends boolean | null | undefined | PaymentLinkDefaultArgs> = $Result.GetResult<Prisma.$PaymentLinkPayload, S>

  type PaymentLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentLinkCountAggregateInputType | true
    }

  export interface PaymentLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentLink'], meta: { name: 'PaymentLink' } }
    /**
     * Find zero or one PaymentLink that matches the filter.
     * @param {PaymentLinkFindUniqueArgs} args - Arguments to find a PaymentLink
     * @example
     * // Get one PaymentLink
     * const paymentLink = await prisma.paymentLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentLinkFindUniqueArgs>(args: SelectSubset<T, PaymentLinkFindUniqueArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentLinkFindUniqueOrThrowArgs} args - Arguments to find a PaymentLink
     * @example
     * // Get one PaymentLink
     * const paymentLink = await prisma.paymentLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkFindFirstArgs} args - Arguments to find a PaymentLink
     * @example
     * // Get one PaymentLink
     * const paymentLink = await prisma.paymentLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentLinkFindFirstArgs>(args?: SelectSubset<T, PaymentLinkFindFirstArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkFindFirstOrThrowArgs} args - Arguments to find a PaymentLink
     * @example
     * // Get one PaymentLink
     * const paymentLink = await prisma.paymentLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentLinks
     * const paymentLinks = await prisma.paymentLink.findMany()
     * 
     * // Get first 10 PaymentLinks
     * const paymentLinks = await prisma.paymentLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentLinkWithIdOnly = await prisma.paymentLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentLinkFindManyArgs>(args?: SelectSubset<T, PaymentLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentLink.
     * @param {PaymentLinkCreateArgs} args - Arguments to create a PaymentLink.
     * @example
     * // Create one PaymentLink
     * const PaymentLink = await prisma.paymentLink.create({
     *   data: {
     *     // ... data to create a PaymentLink
     *   }
     * })
     * 
     */
    create<T extends PaymentLinkCreateArgs>(args: SelectSubset<T, PaymentLinkCreateArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentLinks.
     * @param {PaymentLinkCreateManyArgs} args - Arguments to create many PaymentLinks.
     * @example
     * // Create many PaymentLinks
     * const paymentLink = await prisma.paymentLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentLinkCreateManyArgs>(args?: SelectSubset<T, PaymentLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentLinks and returns the data saved in the database.
     * @param {PaymentLinkCreateManyAndReturnArgs} args - Arguments to create many PaymentLinks.
     * @example
     * // Create many PaymentLinks
     * const paymentLink = await prisma.paymentLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentLinks and only return the `id`
     * const paymentLinkWithIdOnly = await prisma.paymentLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentLink.
     * @param {PaymentLinkDeleteArgs} args - Arguments to delete one PaymentLink.
     * @example
     * // Delete one PaymentLink
     * const PaymentLink = await prisma.paymentLink.delete({
     *   where: {
     *     // ... filter to delete one PaymentLink
     *   }
     * })
     * 
     */
    delete<T extends PaymentLinkDeleteArgs>(args: SelectSubset<T, PaymentLinkDeleteArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentLink.
     * @param {PaymentLinkUpdateArgs} args - Arguments to update one PaymentLink.
     * @example
     * // Update one PaymentLink
     * const paymentLink = await prisma.paymentLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentLinkUpdateArgs>(args: SelectSubset<T, PaymentLinkUpdateArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentLinks.
     * @param {PaymentLinkDeleteManyArgs} args - Arguments to filter PaymentLinks to delete.
     * @example
     * // Delete a few PaymentLinks
     * const { count } = await prisma.paymentLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentLinkDeleteManyArgs>(args?: SelectSubset<T, PaymentLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentLinks
     * const paymentLink = await prisma.paymentLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentLinkUpdateManyArgs>(args: SelectSubset<T, PaymentLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentLinks and returns the data updated in the database.
     * @param {PaymentLinkUpdateManyAndReturnArgs} args - Arguments to update many PaymentLinks.
     * @example
     * // Update many PaymentLinks
     * const paymentLink = await prisma.paymentLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentLinks and only return the `id`
     * const paymentLinkWithIdOnly = await prisma.paymentLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentLink.
     * @param {PaymentLinkUpsertArgs} args - Arguments to update or create a PaymentLink.
     * @example
     * // Update or create a PaymentLink
     * const paymentLink = await prisma.paymentLink.upsert({
     *   create: {
     *     // ... data to create a PaymentLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentLink we want to update
     *   }
     * })
     */
    upsert<T extends PaymentLinkUpsertArgs>(args: SelectSubset<T, PaymentLinkUpsertArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkCountArgs} args - Arguments to filter PaymentLinks to count.
     * @example
     * // Count the number of PaymentLinks
     * const count = await prisma.paymentLink.count({
     *   where: {
     *     // ... the filter for the PaymentLinks we want to count
     *   }
     * })
    **/
    count<T extends PaymentLinkCountArgs>(
      args?: Subset<T, PaymentLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentLinkAggregateArgs>(args: Subset<T, PaymentLinkAggregateArgs>): Prisma.PrismaPromise<GetPaymentLinkAggregateType<T>>

    /**
     * Group by PaymentLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentLinkGroupByArgs['orderBy'] }
        : { orderBy?: PaymentLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentLink model
   */
  readonly fields: PaymentLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    IntiatedPayment<T extends PaymentLink$IntiatedPaymentArgs<ExtArgs> = {}>(args?: Subset<T, PaymentLink$IntiatedPaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentLink model
   */
  interface PaymentLinkFieldRefs {
    readonly id: FieldRef<"PaymentLink", 'String'>
    readonly amount: FieldRef<"PaymentLink", 'Decimal'>
    readonly status: FieldRef<"PaymentLink", 'PaymentLinkStatus'>
    readonly createdAt: FieldRef<"PaymentLink", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentLink", 'DateTime'>
    readonly expiresAt: FieldRef<"PaymentLink", 'DateTime'>
    readonly description: FieldRef<"PaymentLink", 'String'>
    readonly userId: FieldRef<"PaymentLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentLink findUnique
   */
  export type PaymentLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLink to fetch.
     */
    where: PaymentLinkWhereUniqueInput
  }

  /**
   * PaymentLink findUniqueOrThrow
   */
  export type PaymentLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLink to fetch.
     */
    where: PaymentLinkWhereUniqueInput
  }

  /**
   * PaymentLink findFirst
   */
  export type PaymentLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLink to fetch.
     */
    where?: PaymentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLinks to fetch.
     */
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentLinks.
     */
    cursor?: PaymentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentLinks.
     */
    distinct?: PaymentLinkScalarFieldEnum | PaymentLinkScalarFieldEnum[]
  }

  /**
   * PaymentLink findFirstOrThrow
   */
  export type PaymentLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLink to fetch.
     */
    where?: PaymentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLinks to fetch.
     */
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentLinks.
     */
    cursor?: PaymentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentLinks.
     */
    distinct?: PaymentLinkScalarFieldEnum | PaymentLinkScalarFieldEnum[]
  }

  /**
   * PaymentLink findMany
   */
  export type PaymentLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLinks to fetch.
     */
    where?: PaymentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLinks to fetch.
     */
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentLinks.
     */
    cursor?: PaymentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLinks.
     */
    skip?: number
    distinct?: PaymentLinkScalarFieldEnum | PaymentLinkScalarFieldEnum[]
  }

  /**
   * PaymentLink create
   */
  export type PaymentLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentLink.
     */
    data: XOR<PaymentLinkCreateInput, PaymentLinkUncheckedCreateInput>
  }

  /**
   * PaymentLink createMany
   */
  export type PaymentLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentLinks.
     */
    data: PaymentLinkCreateManyInput | PaymentLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentLink createManyAndReturn
   */
  export type PaymentLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentLinks.
     */
    data: PaymentLinkCreateManyInput | PaymentLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentLink update
   */
  export type PaymentLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentLink.
     */
    data: XOR<PaymentLinkUpdateInput, PaymentLinkUncheckedUpdateInput>
    /**
     * Choose, which PaymentLink to update.
     */
    where: PaymentLinkWhereUniqueInput
  }

  /**
   * PaymentLink updateMany
   */
  export type PaymentLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentLinks.
     */
    data: XOR<PaymentLinkUpdateManyMutationInput, PaymentLinkUncheckedUpdateManyInput>
    /**
     * Filter which PaymentLinks to update
     */
    where?: PaymentLinkWhereInput
    /**
     * Limit how many PaymentLinks to update.
     */
    limit?: number
  }

  /**
   * PaymentLink updateManyAndReturn
   */
  export type PaymentLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * The data used to update PaymentLinks.
     */
    data: XOR<PaymentLinkUpdateManyMutationInput, PaymentLinkUncheckedUpdateManyInput>
    /**
     * Filter which PaymentLinks to update
     */
    where?: PaymentLinkWhereInput
    /**
     * Limit how many PaymentLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentLink upsert
   */
  export type PaymentLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentLink to update in case it exists.
     */
    where: PaymentLinkWhereUniqueInput
    /**
     * In case the PaymentLink found by the `where` argument doesn't exist, create a new PaymentLink with this data.
     */
    create: XOR<PaymentLinkCreateInput, PaymentLinkUncheckedCreateInput>
    /**
     * In case the PaymentLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentLinkUpdateInput, PaymentLinkUncheckedUpdateInput>
  }

  /**
   * PaymentLink delete
   */
  export type PaymentLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter which PaymentLink to delete.
     */
    where: PaymentLinkWhereUniqueInput
  }

  /**
   * PaymentLink deleteMany
   */
  export type PaymentLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentLinks to delete
     */
    where?: PaymentLinkWhereInput
    /**
     * Limit how many PaymentLinks to delete.
     */
    limit?: number
  }

  /**
   * PaymentLink.IntiatedPayment
   */
  export type PaymentLink$IntiatedPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    where?: IntiatedPaymentWhereInput
    orderBy?: IntiatedPaymentOrderByWithRelationInput | IntiatedPaymentOrderByWithRelationInput[]
    cursor?: IntiatedPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntiatedPaymentScalarFieldEnum | IntiatedPaymentScalarFieldEnum[]
  }

  /**
   * PaymentLink without action
   */
  export type PaymentLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
  }


  /**
   * Model PaymentPage
   */

  export type AggregatePaymentPage = {
    _count: PaymentPageCountAggregateOutputType | null
    _avg: PaymentPageAvgAggregateOutputType | null
    _sum: PaymentPageSumAggregateOutputType | null
    _min: PaymentPageMinAggregateOutputType | null
    _max: PaymentPageMaxAggregateOutputType | null
  }

  export type PaymentPageAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentPageSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentPageMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    logoUrl: string | null
    amount: Decimal | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.PaymentPageStatus | null
  }

  export type PaymentPageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    logoUrl: string | null
    amount: Decimal | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.PaymentPageStatus | null
  }

  export type PaymentPageCountAggregateOutputType = {
    id: number
    title: number
    description: number
    logoUrl: number
    amount: number
    userId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type PaymentPageAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentPageSumAggregateInputType = {
    amount?: true
  }

  export type PaymentPageMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    logoUrl?: true
    amount?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type PaymentPageMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    logoUrl?: true
    amount?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type PaymentPageCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    logoUrl?: true
    amount?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type PaymentPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPage to aggregate.
     */
    where?: PaymentPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPages to fetch.
     */
    orderBy?: PaymentPageOrderByWithRelationInput | PaymentPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentPages
    **/
    _count?: true | PaymentPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentPageMaxAggregateInputType
  }

  export type GetPaymentPageAggregateType<T extends PaymentPageAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentPage[P]>
      : GetScalarType<T[P], AggregatePaymentPage[P]>
  }




  export type PaymentPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPageWhereInput
    orderBy?: PaymentPageOrderByWithAggregationInput | PaymentPageOrderByWithAggregationInput[]
    by: PaymentPageScalarFieldEnum[] | PaymentPageScalarFieldEnum
    having?: PaymentPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentPageCountAggregateInputType | true
    _avg?: PaymentPageAvgAggregateInputType
    _sum?: PaymentPageSumAggregateInputType
    _min?: PaymentPageMinAggregateInputType
    _max?: PaymentPageMaxAggregateInputType
  }

  export type PaymentPageGroupByOutputType = {
    id: string
    title: string
    description: string | null
    logoUrl: string
    amount: Decimal
    userId: string
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    status: $Enums.PaymentPageStatus
    _count: PaymentPageCountAggregateOutputType | null
    _avg: PaymentPageAvgAggregateOutputType | null
    _sum: PaymentPageSumAggregateOutputType | null
    _min: PaymentPageMinAggregateOutputType | null
    _max: PaymentPageMaxAggregateOutputType | null
  }

  type GetPaymentPageGroupByPayload<T extends PaymentPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentPageGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentPageGroupByOutputType[P]>
        }
      >
    >


  export type PaymentPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    logoUrl?: boolean
    amount?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    IntiatedPayment?: boolean | PaymentPage$IntiatedPaymentArgs<ExtArgs>
    PaymentPageForm?: boolean | PaymentPage$PaymentPageFormArgs<ExtArgs>
    _count?: boolean | PaymentPageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPage"]>

  export type PaymentPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    logoUrl?: boolean
    amount?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPage"]>

  export type PaymentPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    logoUrl?: boolean
    amount?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPage"]>

  export type PaymentPageSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    logoUrl?: boolean
    amount?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type PaymentPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "logoUrl" | "amount" | "userId" | "expiresAt" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["paymentPage"]>
  export type PaymentPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    IntiatedPayment?: boolean | PaymentPage$IntiatedPaymentArgs<ExtArgs>
    PaymentPageForm?: boolean | PaymentPage$PaymentPageFormArgs<ExtArgs>
    _count?: boolean | PaymentPageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentPage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      IntiatedPayment: Prisma.$IntiatedPaymentPayload<ExtArgs>[]
      PaymentPageForm: Prisma.$PaymentPageFormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      logoUrl: string
      amount: Prisma.Decimal
      userId: string
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
      status: $Enums.PaymentPageStatus
    }, ExtArgs["result"]["paymentPage"]>
    composites: {}
  }

  type PaymentPageGetPayload<S extends boolean | null | undefined | PaymentPageDefaultArgs> = $Result.GetResult<Prisma.$PaymentPagePayload, S>

  type PaymentPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentPageCountAggregateInputType | true
    }

  export interface PaymentPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentPage'], meta: { name: 'PaymentPage' } }
    /**
     * Find zero or one PaymentPage that matches the filter.
     * @param {PaymentPageFindUniqueArgs} args - Arguments to find a PaymentPage
     * @example
     * // Get one PaymentPage
     * const paymentPage = await prisma.paymentPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentPageFindUniqueArgs>(args: SelectSubset<T, PaymentPageFindUniqueArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentPageFindUniqueOrThrowArgs} args - Arguments to find a PaymentPage
     * @example
     * // Get one PaymentPage
     * const paymentPage = await prisma.paymentPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentPageFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFindFirstArgs} args - Arguments to find a PaymentPage
     * @example
     * // Get one PaymentPage
     * const paymentPage = await prisma.paymentPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentPageFindFirstArgs>(args?: SelectSubset<T, PaymentPageFindFirstArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFindFirstOrThrowArgs} args - Arguments to find a PaymentPage
     * @example
     * // Get one PaymentPage
     * const paymentPage = await prisma.paymentPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentPageFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentPages
     * const paymentPages = await prisma.paymentPage.findMany()
     * 
     * // Get first 10 PaymentPages
     * const paymentPages = await prisma.paymentPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentPageWithIdOnly = await prisma.paymentPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentPageFindManyArgs>(args?: SelectSubset<T, PaymentPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentPage.
     * @param {PaymentPageCreateArgs} args - Arguments to create a PaymentPage.
     * @example
     * // Create one PaymentPage
     * const PaymentPage = await prisma.paymentPage.create({
     *   data: {
     *     // ... data to create a PaymentPage
     *   }
     * })
     * 
     */
    create<T extends PaymentPageCreateArgs>(args: SelectSubset<T, PaymentPageCreateArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentPages.
     * @param {PaymentPageCreateManyArgs} args - Arguments to create many PaymentPages.
     * @example
     * // Create many PaymentPages
     * const paymentPage = await prisma.paymentPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentPageCreateManyArgs>(args?: SelectSubset<T, PaymentPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentPages and returns the data saved in the database.
     * @param {PaymentPageCreateManyAndReturnArgs} args - Arguments to create many PaymentPages.
     * @example
     * // Create many PaymentPages
     * const paymentPage = await prisma.paymentPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentPages and only return the `id`
     * const paymentPageWithIdOnly = await prisma.paymentPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentPageCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentPage.
     * @param {PaymentPageDeleteArgs} args - Arguments to delete one PaymentPage.
     * @example
     * // Delete one PaymentPage
     * const PaymentPage = await prisma.paymentPage.delete({
     *   where: {
     *     // ... filter to delete one PaymentPage
     *   }
     * })
     * 
     */
    delete<T extends PaymentPageDeleteArgs>(args: SelectSubset<T, PaymentPageDeleteArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentPage.
     * @param {PaymentPageUpdateArgs} args - Arguments to update one PaymentPage.
     * @example
     * // Update one PaymentPage
     * const paymentPage = await prisma.paymentPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentPageUpdateArgs>(args: SelectSubset<T, PaymentPageUpdateArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentPages.
     * @param {PaymentPageDeleteManyArgs} args - Arguments to filter PaymentPages to delete.
     * @example
     * // Delete a few PaymentPages
     * const { count } = await prisma.paymentPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentPageDeleteManyArgs>(args?: SelectSubset<T, PaymentPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentPages
     * const paymentPage = await prisma.paymentPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentPageUpdateManyArgs>(args: SelectSubset<T, PaymentPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPages and returns the data updated in the database.
     * @param {PaymentPageUpdateManyAndReturnArgs} args - Arguments to update many PaymentPages.
     * @example
     * // Update many PaymentPages
     * const paymentPage = await prisma.paymentPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentPages and only return the `id`
     * const paymentPageWithIdOnly = await prisma.paymentPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentPageUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentPage.
     * @param {PaymentPageUpsertArgs} args - Arguments to update or create a PaymentPage.
     * @example
     * // Update or create a PaymentPage
     * const paymentPage = await prisma.paymentPage.upsert({
     *   create: {
     *     // ... data to create a PaymentPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentPage we want to update
     *   }
     * })
     */
    upsert<T extends PaymentPageUpsertArgs>(args: SelectSubset<T, PaymentPageUpsertArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageCountArgs} args - Arguments to filter PaymentPages to count.
     * @example
     * // Count the number of PaymentPages
     * const count = await prisma.paymentPage.count({
     *   where: {
     *     // ... the filter for the PaymentPages we want to count
     *   }
     * })
    **/
    count<T extends PaymentPageCountArgs>(
      args?: Subset<T, PaymentPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentPageAggregateArgs>(args: Subset<T, PaymentPageAggregateArgs>): Prisma.PrismaPromise<GetPaymentPageAggregateType<T>>

    /**
     * Group by PaymentPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentPageGroupByArgs['orderBy'] }
        : { orderBy?: PaymentPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentPage model
   */
  readonly fields: PaymentPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    IntiatedPayment<T extends PaymentPage$IntiatedPaymentArgs<ExtArgs> = {}>(args?: Subset<T, PaymentPage$IntiatedPaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PaymentPageForm<T extends PaymentPage$PaymentPageFormArgs<ExtArgs> = {}>(args?: Subset<T, PaymentPage$PaymentPageFormArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentPage model
   */
  interface PaymentPageFieldRefs {
    readonly id: FieldRef<"PaymentPage", 'String'>
    readonly title: FieldRef<"PaymentPage", 'String'>
    readonly description: FieldRef<"PaymentPage", 'String'>
    readonly logoUrl: FieldRef<"PaymentPage", 'String'>
    readonly amount: FieldRef<"PaymentPage", 'Decimal'>
    readonly userId: FieldRef<"PaymentPage", 'String'>
    readonly expiresAt: FieldRef<"PaymentPage", 'DateTime'>
    readonly createdAt: FieldRef<"PaymentPage", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentPage", 'DateTime'>
    readonly status: FieldRef<"PaymentPage", 'PaymentPageStatus'>
  }
    

  // Custom InputTypes
  /**
   * PaymentPage findUnique
   */
  export type PaymentPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPage to fetch.
     */
    where: PaymentPageWhereUniqueInput
  }

  /**
   * PaymentPage findUniqueOrThrow
   */
  export type PaymentPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPage to fetch.
     */
    where: PaymentPageWhereUniqueInput
  }

  /**
   * PaymentPage findFirst
   */
  export type PaymentPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPage to fetch.
     */
    where?: PaymentPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPages to fetch.
     */
    orderBy?: PaymentPageOrderByWithRelationInput | PaymentPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPages.
     */
    cursor?: PaymentPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPages.
     */
    distinct?: PaymentPageScalarFieldEnum | PaymentPageScalarFieldEnum[]
  }

  /**
   * PaymentPage findFirstOrThrow
   */
  export type PaymentPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPage to fetch.
     */
    where?: PaymentPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPages to fetch.
     */
    orderBy?: PaymentPageOrderByWithRelationInput | PaymentPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPages.
     */
    cursor?: PaymentPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPages.
     */
    distinct?: PaymentPageScalarFieldEnum | PaymentPageScalarFieldEnum[]
  }

  /**
   * PaymentPage findMany
   */
  export type PaymentPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPages to fetch.
     */
    where?: PaymentPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPages to fetch.
     */
    orderBy?: PaymentPageOrderByWithRelationInput | PaymentPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentPages.
     */
    cursor?: PaymentPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPages.
     */
    skip?: number
    distinct?: PaymentPageScalarFieldEnum | PaymentPageScalarFieldEnum[]
  }

  /**
   * PaymentPage create
   */
  export type PaymentPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentPage.
     */
    data: XOR<PaymentPageCreateInput, PaymentPageUncheckedCreateInput>
  }

  /**
   * PaymentPage createMany
   */
  export type PaymentPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentPages.
     */
    data: PaymentPageCreateManyInput | PaymentPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPage createManyAndReturn
   */
  export type PaymentPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentPages.
     */
    data: PaymentPageCreateManyInput | PaymentPageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentPage update
   */
  export type PaymentPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentPage.
     */
    data: XOR<PaymentPageUpdateInput, PaymentPageUncheckedUpdateInput>
    /**
     * Choose, which PaymentPage to update.
     */
    where: PaymentPageWhereUniqueInput
  }

  /**
   * PaymentPage updateMany
   */
  export type PaymentPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentPages.
     */
    data: XOR<PaymentPageUpdateManyMutationInput, PaymentPageUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPages to update
     */
    where?: PaymentPageWhereInput
    /**
     * Limit how many PaymentPages to update.
     */
    limit?: number
  }

  /**
   * PaymentPage updateManyAndReturn
   */
  export type PaymentPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * The data used to update PaymentPages.
     */
    data: XOR<PaymentPageUpdateManyMutationInput, PaymentPageUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPages to update
     */
    where?: PaymentPageWhereInput
    /**
     * Limit how many PaymentPages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentPage upsert
   */
  export type PaymentPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentPage to update in case it exists.
     */
    where: PaymentPageWhereUniqueInput
    /**
     * In case the PaymentPage found by the `where` argument doesn't exist, create a new PaymentPage with this data.
     */
    create: XOR<PaymentPageCreateInput, PaymentPageUncheckedCreateInput>
    /**
     * In case the PaymentPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentPageUpdateInput, PaymentPageUncheckedUpdateInput>
  }

  /**
   * PaymentPage delete
   */
  export type PaymentPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    /**
     * Filter which PaymentPage to delete.
     */
    where: PaymentPageWhereUniqueInput
  }

  /**
   * PaymentPage deleteMany
   */
  export type PaymentPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPages to delete
     */
    where?: PaymentPageWhereInput
    /**
     * Limit how many PaymentPages to delete.
     */
    limit?: number
  }

  /**
   * PaymentPage.IntiatedPayment
   */
  export type PaymentPage$IntiatedPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    where?: IntiatedPaymentWhereInput
    orderBy?: IntiatedPaymentOrderByWithRelationInput | IntiatedPaymentOrderByWithRelationInput[]
    cursor?: IntiatedPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntiatedPaymentScalarFieldEnum | IntiatedPaymentScalarFieldEnum[]
  }

  /**
   * PaymentPage.PaymentPageForm
   */
  export type PaymentPage$PaymentPageFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    where?: PaymentPageFormWhereInput
    orderBy?: PaymentPageFormOrderByWithRelationInput | PaymentPageFormOrderByWithRelationInput[]
    cursor?: PaymentPageFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentPageFormScalarFieldEnum | PaymentPageFormScalarFieldEnum[]
  }

  /**
   * PaymentPage without action
   */
  export type PaymentPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
  }


  /**
   * Model IntiatedPayment
   */

  export type AggregateIntiatedPayment = {
    _count: IntiatedPaymentCountAggregateOutputType | null
    _avg: IntiatedPaymentAvgAggregateOutputType | null
    _sum: IntiatedPaymentSumAggregateOutputType | null
    _min: IntiatedPaymentMinAggregateOutputType | null
    _max: IntiatedPaymentMaxAggregateOutputType | null
  }

  export type IntiatedPaymentAvgAggregateOutputType = {
    index: number | null
    amount: Decimal | null
  }

  export type IntiatedPaymentSumAggregateOutputType = {
    index: number | null
    amount: Decimal | null
  }

  export type IntiatedPaymentMinAggregateOutputType = {
    id: string | null
    initiatedFrom: $Enums.IntiatedFrom | null
    status: $Enums.IntiatedPaymentStatus | null
    index: number | null
    walletAddress: string | null
    amount: Decimal | null
    paymentPageId: string | null
    paymentLinkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntiatedPaymentMaxAggregateOutputType = {
    id: string | null
    initiatedFrom: $Enums.IntiatedFrom | null
    status: $Enums.IntiatedPaymentStatus | null
    index: number | null
    walletAddress: string | null
    amount: Decimal | null
    paymentPageId: string | null
    paymentLinkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntiatedPaymentCountAggregateOutputType = {
    id: number
    initiatedFrom: number
    status: number
    index: number
    walletAddress: number
    amount: number
    paymentPageId: number
    paymentLinkId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntiatedPaymentAvgAggregateInputType = {
    index?: true
    amount?: true
  }

  export type IntiatedPaymentSumAggregateInputType = {
    index?: true
    amount?: true
  }

  export type IntiatedPaymentMinAggregateInputType = {
    id?: true
    initiatedFrom?: true
    status?: true
    index?: true
    walletAddress?: true
    amount?: true
    paymentPageId?: true
    paymentLinkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntiatedPaymentMaxAggregateInputType = {
    id?: true
    initiatedFrom?: true
    status?: true
    index?: true
    walletAddress?: true
    amount?: true
    paymentPageId?: true
    paymentLinkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntiatedPaymentCountAggregateInputType = {
    id?: true
    initiatedFrom?: true
    status?: true
    index?: true
    walletAddress?: true
    amount?: true
    paymentPageId?: true
    paymentLinkId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntiatedPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntiatedPayment to aggregate.
     */
    where?: IntiatedPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntiatedPayments to fetch.
     */
    orderBy?: IntiatedPaymentOrderByWithRelationInput | IntiatedPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntiatedPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntiatedPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntiatedPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntiatedPayments
    **/
    _count?: true | IntiatedPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntiatedPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntiatedPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntiatedPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntiatedPaymentMaxAggregateInputType
  }

  export type GetIntiatedPaymentAggregateType<T extends IntiatedPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateIntiatedPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntiatedPayment[P]>
      : GetScalarType<T[P], AggregateIntiatedPayment[P]>
  }




  export type IntiatedPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntiatedPaymentWhereInput
    orderBy?: IntiatedPaymentOrderByWithAggregationInput | IntiatedPaymentOrderByWithAggregationInput[]
    by: IntiatedPaymentScalarFieldEnum[] | IntiatedPaymentScalarFieldEnum
    having?: IntiatedPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntiatedPaymentCountAggregateInputType | true
    _avg?: IntiatedPaymentAvgAggregateInputType
    _sum?: IntiatedPaymentSumAggregateInputType
    _min?: IntiatedPaymentMinAggregateInputType
    _max?: IntiatedPaymentMaxAggregateInputType
  }

  export type IntiatedPaymentGroupByOutputType = {
    id: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal
    paymentPageId: string | null
    paymentLinkId: string | null
    createdAt: Date
    updatedAt: Date
    _count: IntiatedPaymentCountAggregateOutputType | null
    _avg: IntiatedPaymentAvgAggregateOutputType | null
    _sum: IntiatedPaymentSumAggregateOutputType | null
    _min: IntiatedPaymentMinAggregateOutputType | null
    _max: IntiatedPaymentMaxAggregateOutputType | null
  }

  type GetIntiatedPaymentGroupByPayload<T extends IntiatedPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntiatedPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntiatedPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntiatedPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], IntiatedPaymentGroupByOutputType[P]>
        }
      >
    >


  export type IntiatedPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    initiatedFrom?: boolean
    status?: boolean
    index?: boolean
    walletAddress?: boolean
    amount?: boolean
    paymentPageId?: boolean
    paymentLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentPage?: boolean | IntiatedPayment$paymentPageArgs<ExtArgs>
    paymentLink?: boolean | IntiatedPayment$paymentLinkArgs<ExtArgs>
    Transaction?: boolean | IntiatedPayment$TransactionArgs<ExtArgs>
    _count?: boolean | IntiatedPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intiatedPayment"]>

  export type IntiatedPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    initiatedFrom?: boolean
    status?: boolean
    index?: boolean
    walletAddress?: boolean
    amount?: boolean
    paymentPageId?: boolean
    paymentLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentPage?: boolean | IntiatedPayment$paymentPageArgs<ExtArgs>
    paymentLink?: boolean | IntiatedPayment$paymentLinkArgs<ExtArgs>
  }, ExtArgs["result"]["intiatedPayment"]>

  export type IntiatedPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    initiatedFrom?: boolean
    status?: boolean
    index?: boolean
    walletAddress?: boolean
    amount?: boolean
    paymentPageId?: boolean
    paymentLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentPage?: boolean | IntiatedPayment$paymentPageArgs<ExtArgs>
    paymentLink?: boolean | IntiatedPayment$paymentLinkArgs<ExtArgs>
  }, ExtArgs["result"]["intiatedPayment"]>

  export type IntiatedPaymentSelectScalar = {
    id?: boolean
    initiatedFrom?: boolean
    status?: boolean
    index?: boolean
    walletAddress?: boolean
    amount?: boolean
    paymentPageId?: boolean
    paymentLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntiatedPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "initiatedFrom" | "status" | "index" | "walletAddress" | "amount" | "paymentPageId" | "paymentLinkId" | "createdAt" | "updatedAt", ExtArgs["result"]["intiatedPayment"]>
  export type IntiatedPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentPage?: boolean | IntiatedPayment$paymentPageArgs<ExtArgs>
    paymentLink?: boolean | IntiatedPayment$paymentLinkArgs<ExtArgs>
    Transaction?: boolean | IntiatedPayment$TransactionArgs<ExtArgs>
    _count?: boolean | IntiatedPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IntiatedPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentPage?: boolean | IntiatedPayment$paymentPageArgs<ExtArgs>
    paymentLink?: boolean | IntiatedPayment$paymentLinkArgs<ExtArgs>
  }
  export type IntiatedPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentPage?: boolean | IntiatedPayment$paymentPageArgs<ExtArgs>
    paymentLink?: boolean | IntiatedPayment$paymentLinkArgs<ExtArgs>
  }

  export type $IntiatedPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntiatedPayment"
    objects: {
      paymentPage: Prisma.$PaymentPagePayload<ExtArgs> | null
      paymentLink: Prisma.$PaymentLinkPayload<ExtArgs> | null
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      initiatedFrom: $Enums.IntiatedFrom
      status: $Enums.IntiatedPaymentStatus
      index: number
      walletAddress: string
      amount: Prisma.Decimal
      paymentPageId: string | null
      paymentLinkId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["intiatedPayment"]>
    composites: {}
  }

  type IntiatedPaymentGetPayload<S extends boolean | null | undefined | IntiatedPaymentDefaultArgs> = $Result.GetResult<Prisma.$IntiatedPaymentPayload, S>

  type IntiatedPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntiatedPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntiatedPaymentCountAggregateInputType | true
    }

  export interface IntiatedPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntiatedPayment'], meta: { name: 'IntiatedPayment' } }
    /**
     * Find zero or one IntiatedPayment that matches the filter.
     * @param {IntiatedPaymentFindUniqueArgs} args - Arguments to find a IntiatedPayment
     * @example
     * // Get one IntiatedPayment
     * const intiatedPayment = await prisma.intiatedPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntiatedPaymentFindUniqueArgs>(args: SelectSubset<T, IntiatedPaymentFindUniqueArgs<ExtArgs>>): Prisma__IntiatedPaymentClient<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntiatedPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntiatedPaymentFindUniqueOrThrowArgs} args - Arguments to find a IntiatedPayment
     * @example
     * // Get one IntiatedPayment
     * const intiatedPayment = await prisma.intiatedPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntiatedPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, IntiatedPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntiatedPaymentClient<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntiatedPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntiatedPaymentFindFirstArgs} args - Arguments to find a IntiatedPayment
     * @example
     * // Get one IntiatedPayment
     * const intiatedPayment = await prisma.intiatedPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntiatedPaymentFindFirstArgs>(args?: SelectSubset<T, IntiatedPaymentFindFirstArgs<ExtArgs>>): Prisma__IntiatedPaymentClient<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntiatedPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntiatedPaymentFindFirstOrThrowArgs} args - Arguments to find a IntiatedPayment
     * @example
     * // Get one IntiatedPayment
     * const intiatedPayment = await prisma.intiatedPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntiatedPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, IntiatedPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntiatedPaymentClient<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntiatedPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntiatedPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntiatedPayments
     * const intiatedPayments = await prisma.intiatedPayment.findMany()
     * 
     * // Get first 10 IntiatedPayments
     * const intiatedPayments = await prisma.intiatedPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intiatedPaymentWithIdOnly = await prisma.intiatedPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntiatedPaymentFindManyArgs>(args?: SelectSubset<T, IntiatedPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntiatedPayment.
     * @param {IntiatedPaymentCreateArgs} args - Arguments to create a IntiatedPayment.
     * @example
     * // Create one IntiatedPayment
     * const IntiatedPayment = await prisma.intiatedPayment.create({
     *   data: {
     *     // ... data to create a IntiatedPayment
     *   }
     * })
     * 
     */
    create<T extends IntiatedPaymentCreateArgs>(args: SelectSubset<T, IntiatedPaymentCreateArgs<ExtArgs>>): Prisma__IntiatedPaymentClient<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntiatedPayments.
     * @param {IntiatedPaymentCreateManyArgs} args - Arguments to create many IntiatedPayments.
     * @example
     * // Create many IntiatedPayments
     * const intiatedPayment = await prisma.intiatedPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntiatedPaymentCreateManyArgs>(args?: SelectSubset<T, IntiatedPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntiatedPayments and returns the data saved in the database.
     * @param {IntiatedPaymentCreateManyAndReturnArgs} args - Arguments to create many IntiatedPayments.
     * @example
     * // Create many IntiatedPayments
     * const intiatedPayment = await prisma.intiatedPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntiatedPayments and only return the `id`
     * const intiatedPaymentWithIdOnly = await prisma.intiatedPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntiatedPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, IntiatedPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntiatedPayment.
     * @param {IntiatedPaymentDeleteArgs} args - Arguments to delete one IntiatedPayment.
     * @example
     * // Delete one IntiatedPayment
     * const IntiatedPayment = await prisma.intiatedPayment.delete({
     *   where: {
     *     // ... filter to delete one IntiatedPayment
     *   }
     * })
     * 
     */
    delete<T extends IntiatedPaymentDeleteArgs>(args: SelectSubset<T, IntiatedPaymentDeleteArgs<ExtArgs>>): Prisma__IntiatedPaymentClient<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntiatedPayment.
     * @param {IntiatedPaymentUpdateArgs} args - Arguments to update one IntiatedPayment.
     * @example
     * // Update one IntiatedPayment
     * const intiatedPayment = await prisma.intiatedPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntiatedPaymentUpdateArgs>(args: SelectSubset<T, IntiatedPaymentUpdateArgs<ExtArgs>>): Prisma__IntiatedPaymentClient<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntiatedPayments.
     * @param {IntiatedPaymentDeleteManyArgs} args - Arguments to filter IntiatedPayments to delete.
     * @example
     * // Delete a few IntiatedPayments
     * const { count } = await prisma.intiatedPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntiatedPaymentDeleteManyArgs>(args?: SelectSubset<T, IntiatedPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntiatedPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntiatedPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntiatedPayments
     * const intiatedPayment = await prisma.intiatedPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntiatedPaymentUpdateManyArgs>(args: SelectSubset<T, IntiatedPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntiatedPayments and returns the data updated in the database.
     * @param {IntiatedPaymentUpdateManyAndReturnArgs} args - Arguments to update many IntiatedPayments.
     * @example
     * // Update many IntiatedPayments
     * const intiatedPayment = await prisma.intiatedPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntiatedPayments and only return the `id`
     * const intiatedPaymentWithIdOnly = await prisma.intiatedPayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntiatedPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, IntiatedPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntiatedPayment.
     * @param {IntiatedPaymentUpsertArgs} args - Arguments to update or create a IntiatedPayment.
     * @example
     * // Update or create a IntiatedPayment
     * const intiatedPayment = await prisma.intiatedPayment.upsert({
     *   create: {
     *     // ... data to create a IntiatedPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntiatedPayment we want to update
     *   }
     * })
     */
    upsert<T extends IntiatedPaymentUpsertArgs>(args: SelectSubset<T, IntiatedPaymentUpsertArgs<ExtArgs>>): Prisma__IntiatedPaymentClient<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntiatedPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntiatedPaymentCountArgs} args - Arguments to filter IntiatedPayments to count.
     * @example
     * // Count the number of IntiatedPayments
     * const count = await prisma.intiatedPayment.count({
     *   where: {
     *     // ... the filter for the IntiatedPayments we want to count
     *   }
     * })
    **/
    count<T extends IntiatedPaymentCountArgs>(
      args?: Subset<T, IntiatedPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntiatedPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntiatedPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntiatedPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntiatedPaymentAggregateArgs>(args: Subset<T, IntiatedPaymentAggregateArgs>): Prisma.PrismaPromise<GetIntiatedPaymentAggregateType<T>>

    /**
     * Group by IntiatedPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntiatedPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntiatedPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntiatedPaymentGroupByArgs['orderBy'] }
        : { orderBy?: IntiatedPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntiatedPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntiatedPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntiatedPayment model
   */
  readonly fields: IntiatedPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntiatedPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntiatedPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentPage<T extends IntiatedPayment$paymentPageArgs<ExtArgs> = {}>(args?: Subset<T, IntiatedPayment$paymentPageArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentLink<T extends IntiatedPayment$paymentLinkArgs<ExtArgs> = {}>(args?: Subset<T, IntiatedPayment$paymentLinkArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Transaction<T extends IntiatedPayment$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, IntiatedPayment$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IntiatedPayment model
   */
  interface IntiatedPaymentFieldRefs {
    readonly id: FieldRef<"IntiatedPayment", 'String'>
    readonly initiatedFrom: FieldRef<"IntiatedPayment", 'IntiatedFrom'>
    readonly status: FieldRef<"IntiatedPayment", 'IntiatedPaymentStatus'>
    readonly index: FieldRef<"IntiatedPayment", 'Int'>
    readonly walletAddress: FieldRef<"IntiatedPayment", 'String'>
    readonly amount: FieldRef<"IntiatedPayment", 'Decimal'>
    readonly paymentPageId: FieldRef<"IntiatedPayment", 'String'>
    readonly paymentLinkId: FieldRef<"IntiatedPayment", 'String'>
    readonly createdAt: FieldRef<"IntiatedPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"IntiatedPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntiatedPayment findUnique
   */
  export type IntiatedPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which IntiatedPayment to fetch.
     */
    where: IntiatedPaymentWhereUniqueInput
  }

  /**
   * IntiatedPayment findUniqueOrThrow
   */
  export type IntiatedPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which IntiatedPayment to fetch.
     */
    where: IntiatedPaymentWhereUniqueInput
  }

  /**
   * IntiatedPayment findFirst
   */
  export type IntiatedPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which IntiatedPayment to fetch.
     */
    where?: IntiatedPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntiatedPayments to fetch.
     */
    orderBy?: IntiatedPaymentOrderByWithRelationInput | IntiatedPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntiatedPayments.
     */
    cursor?: IntiatedPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntiatedPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntiatedPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntiatedPayments.
     */
    distinct?: IntiatedPaymentScalarFieldEnum | IntiatedPaymentScalarFieldEnum[]
  }

  /**
   * IntiatedPayment findFirstOrThrow
   */
  export type IntiatedPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which IntiatedPayment to fetch.
     */
    where?: IntiatedPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntiatedPayments to fetch.
     */
    orderBy?: IntiatedPaymentOrderByWithRelationInput | IntiatedPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntiatedPayments.
     */
    cursor?: IntiatedPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntiatedPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntiatedPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntiatedPayments.
     */
    distinct?: IntiatedPaymentScalarFieldEnum | IntiatedPaymentScalarFieldEnum[]
  }

  /**
   * IntiatedPayment findMany
   */
  export type IntiatedPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which IntiatedPayments to fetch.
     */
    where?: IntiatedPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntiatedPayments to fetch.
     */
    orderBy?: IntiatedPaymentOrderByWithRelationInput | IntiatedPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntiatedPayments.
     */
    cursor?: IntiatedPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntiatedPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntiatedPayments.
     */
    skip?: number
    distinct?: IntiatedPaymentScalarFieldEnum | IntiatedPaymentScalarFieldEnum[]
  }

  /**
   * IntiatedPayment create
   */
  export type IntiatedPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a IntiatedPayment.
     */
    data: XOR<IntiatedPaymentCreateInput, IntiatedPaymentUncheckedCreateInput>
  }

  /**
   * IntiatedPayment createMany
   */
  export type IntiatedPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntiatedPayments.
     */
    data: IntiatedPaymentCreateManyInput | IntiatedPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntiatedPayment createManyAndReturn
   */
  export type IntiatedPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many IntiatedPayments.
     */
    data: IntiatedPaymentCreateManyInput | IntiatedPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntiatedPayment update
   */
  export type IntiatedPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a IntiatedPayment.
     */
    data: XOR<IntiatedPaymentUpdateInput, IntiatedPaymentUncheckedUpdateInput>
    /**
     * Choose, which IntiatedPayment to update.
     */
    where: IntiatedPaymentWhereUniqueInput
  }

  /**
   * IntiatedPayment updateMany
   */
  export type IntiatedPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntiatedPayments.
     */
    data: XOR<IntiatedPaymentUpdateManyMutationInput, IntiatedPaymentUncheckedUpdateManyInput>
    /**
     * Filter which IntiatedPayments to update
     */
    where?: IntiatedPaymentWhereInput
    /**
     * Limit how many IntiatedPayments to update.
     */
    limit?: number
  }

  /**
   * IntiatedPayment updateManyAndReturn
   */
  export type IntiatedPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * The data used to update IntiatedPayments.
     */
    data: XOR<IntiatedPaymentUpdateManyMutationInput, IntiatedPaymentUncheckedUpdateManyInput>
    /**
     * Filter which IntiatedPayments to update
     */
    where?: IntiatedPaymentWhereInput
    /**
     * Limit how many IntiatedPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntiatedPayment upsert
   */
  export type IntiatedPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the IntiatedPayment to update in case it exists.
     */
    where: IntiatedPaymentWhereUniqueInput
    /**
     * In case the IntiatedPayment found by the `where` argument doesn't exist, create a new IntiatedPayment with this data.
     */
    create: XOR<IntiatedPaymentCreateInput, IntiatedPaymentUncheckedCreateInput>
    /**
     * In case the IntiatedPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntiatedPaymentUpdateInput, IntiatedPaymentUncheckedUpdateInput>
  }

  /**
   * IntiatedPayment delete
   */
  export type IntiatedPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
    /**
     * Filter which IntiatedPayment to delete.
     */
    where: IntiatedPaymentWhereUniqueInput
  }

  /**
   * IntiatedPayment deleteMany
   */
  export type IntiatedPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntiatedPayments to delete
     */
    where?: IntiatedPaymentWhereInput
    /**
     * Limit how many IntiatedPayments to delete.
     */
    limit?: number
  }

  /**
   * IntiatedPayment.paymentPage
   */
  export type IntiatedPayment$paymentPageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPage
     */
    select?: PaymentPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPage
     */
    omit?: PaymentPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageInclude<ExtArgs> | null
    where?: PaymentPageWhereInput
  }

  /**
   * IntiatedPayment.paymentLink
   */
  export type IntiatedPayment$paymentLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLink
     */
    omit?: PaymentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    where?: PaymentLinkWhereInput
  }

  /**
   * IntiatedPayment.Transaction
   */
  export type IntiatedPayment$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * IntiatedPayment without action
   */
  export type IntiatedPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntiatedPayment
     */
    select?: IntiatedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntiatedPayment
     */
    omit?: IntiatedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntiatedPaymentInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    status: $Enums.TransactionStatus | null
    amount: Decimal | null
    intiatedPaymentId: string | null
    initiatedFrom: $Enums.IntiatedFrom | null
    toAddress: string | null
    fromAddress: string | null
    settled: boolean | null
    settledAt: Date | null
    settledTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    status: $Enums.TransactionStatus | null
    amount: Decimal | null
    intiatedPaymentId: string | null
    initiatedFrom: $Enums.IntiatedFrom | null
    toAddress: string | null
    fromAddress: string | null
    settled: boolean | null
    settledAt: Date | null
    settledTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    status: number
    amount: number
    intiatedPaymentId: number
    initiatedFrom: number
    toAddress: number
    fromAddress: number
    settled: number
    settledAt: number
    settledTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    status?: true
    amount?: true
    intiatedPaymentId?: true
    initiatedFrom?: true
    toAddress?: true
    fromAddress?: true
    settled?: true
    settledAt?: true
    settledTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    status?: true
    amount?: true
    intiatedPaymentId?: true
    initiatedFrom?: true
    toAddress?: true
    fromAddress?: true
    settled?: true
    settledAt?: true
    settledTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    status?: true
    amount?: true
    intiatedPaymentId?: true
    initiatedFrom?: true
    toAddress?: true
    fromAddress?: true
    settled?: true
    settledAt?: true
    settledTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    status: $Enums.TransactionStatus
    amount: Decimal
    intiatedPaymentId: string
    initiatedFrom: $Enums.IntiatedFrom
    toAddress: string
    fromAddress: string
    settled: boolean
    settledAt: Date | null
    settledTo: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    amount?: boolean
    intiatedPaymentId?: boolean
    initiatedFrom?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    settled?: boolean
    settledAt?: boolean
    settledTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    intiatedPayment?: boolean | IntiatedPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    amount?: boolean
    intiatedPaymentId?: boolean
    initiatedFrom?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    settled?: boolean
    settledAt?: boolean
    settledTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    intiatedPayment?: boolean | IntiatedPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    amount?: boolean
    intiatedPaymentId?: boolean
    initiatedFrom?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    settled?: boolean
    settledAt?: boolean
    settledTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    intiatedPayment?: boolean | IntiatedPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    status?: boolean
    amount?: boolean
    intiatedPaymentId?: boolean
    initiatedFrom?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    settled?: boolean
    settledAt?: boolean
    settledTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "amount" | "intiatedPaymentId" | "initiatedFrom" | "toAddress" | "fromAddress" | "settled" | "settledAt" | "settledTo" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intiatedPayment?: boolean | IntiatedPaymentDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intiatedPayment?: boolean | IntiatedPaymentDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intiatedPayment?: boolean | IntiatedPaymentDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      intiatedPayment: Prisma.$IntiatedPaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.TransactionStatus
      amount: Prisma.Decimal
      intiatedPaymentId: string
      initiatedFrom: $Enums.IntiatedFrom
      toAddress: string
      fromAddress: string
      settled: boolean
      settledAt: Date | null
      settledTo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    intiatedPayment<T extends IntiatedPaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IntiatedPaymentDefaultArgs<ExtArgs>>): Prisma__IntiatedPaymentClient<$Result.GetResult<Prisma.$IntiatedPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly intiatedPaymentId: FieldRef<"Transaction", 'String'>
    readonly initiatedFrom: FieldRef<"Transaction", 'IntiatedFrom'>
    readonly toAddress: FieldRef<"Transaction", 'String'>
    readonly fromAddress: FieldRef<"Transaction", 'String'>
    readonly settled: FieldRef<"Transaction", 'Boolean'>
    readonly settledAt: FieldRef<"Transaction", 'DateTime'>
    readonly settledTo: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model PaymentButton
   */

  export type AggregatePaymentButton = {
    _count: PaymentButtonCountAggregateOutputType | null
    _avg: PaymentButtonAvgAggregateOutputType | null
    _sum: PaymentButtonSumAggregateOutputType | null
    _min: PaymentButtonMinAggregateOutputType | null
    _max: PaymentButtonMaxAggregateOutputType | null
  }

  export type PaymentButtonAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentButtonSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentButtonMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: $Enums.PaymentButtonType | null
    description: string | null
    amount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentButtonMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: $Enums.PaymentButtonType | null
    description: string | null
    amount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentButtonCountAggregateOutputType = {
    id: number
    title: number
    type: number
    description: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentButtonAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentButtonSumAggregateInputType = {
    amount?: true
  }

  export type PaymentButtonMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    description?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentButtonMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    description?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentButtonCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    description?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentButtonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentButton to aggregate.
     */
    where?: PaymentButtonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentButtons to fetch.
     */
    orderBy?: PaymentButtonOrderByWithRelationInput | PaymentButtonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentButtonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentButtons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentButtons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentButtons
    **/
    _count?: true | PaymentButtonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentButtonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentButtonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentButtonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentButtonMaxAggregateInputType
  }

  export type GetPaymentButtonAggregateType<T extends PaymentButtonAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentButton]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentButton[P]>
      : GetScalarType<T[P], AggregatePaymentButton[P]>
  }




  export type PaymentButtonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentButtonWhereInput
    orderBy?: PaymentButtonOrderByWithAggregationInput | PaymentButtonOrderByWithAggregationInput[]
    by: PaymentButtonScalarFieldEnum[] | PaymentButtonScalarFieldEnum
    having?: PaymentButtonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentButtonCountAggregateInputType | true
    _avg?: PaymentButtonAvgAggregateInputType
    _sum?: PaymentButtonSumAggregateInputType
    _min?: PaymentButtonMinAggregateInputType
    _max?: PaymentButtonMaxAggregateInputType
  }

  export type PaymentButtonGroupByOutputType = {
    id: string
    title: string
    type: $Enums.PaymentButtonType
    description: string | null
    amount: Decimal
    createdAt: Date
    updatedAt: Date
    _count: PaymentButtonCountAggregateOutputType | null
    _avg: PaymentButtonAvgAggregateOutputType | null
    _sum: PaymentButtonSumAggregateOutputType | null
    _min: PaymentButtonMinAggregateOutputType | null
    _max: PaymentButtonMaxAggregateOutputType | null
  }

  type GetPaymentButtonGroupByPayload<T extends PaymentButtonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentButtonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentButtonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentButtonGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentButtonGroupByOutputType[P]>
        }
      >
    >


  export type PaymentButtonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentButton"]>

  export type PaymentButtonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentButton"]>

  export type PaymentButtonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentButton"]>

  export type PaymentButtonSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentButtonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "description" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentButton"]>

  export type $PaymentButtonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentButton"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: $Enums.PaymentButtonType
      description: string | null
      amount: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentButton"]>
    composites: {}
  }

  type PaymentButtonGetPayload<S extends boolean | null | undefined | PaymentButtonDefaultArgs> = $Result.GetResult<Prisma.$PaymentButtonPayload, S>

  type PaymentButtonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentButtonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentButtonCountAggregateInputType | true
    }

  export interface PaymentButtonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentButton'], meta: { name: 'PaymentButton' } }
    /**
     * Find zero or one PaymentButton that matches the filter.
     * @param {PaymentButtonFindUniqueArgs} args - Arguments to find a PaymentButton
     * @example
     * // Get one PaymentButton
     * const paymentButton = await prisma.paymentButton.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentButtonFindUniqueArgs>(args: SelectSubset<T, PaymentButtonFindUniqueArgs<ExtArgs>>): Prisma__PaymentButtonClient<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentButton that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentButtonFindUniqueOrThrowArgs} args - Arguments to find a PaymentButton
     * @example
     * // Get one PaymentButton
     * const paymentButton = await prisma.paymentButton.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentButtonFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentButtonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentButtonClient<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentButton that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentButtonFindFirstArgs} args - Arguments to find a PaymentButton
     * @example
     * // Get one PaymentButton
     * const paymentButton = await prisma.paymentButton.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentButtonFindFirstArgs>(args?: SelectSubset<T, PaymentButtonFindFirstArgs<ExtArgs>>): Prisma__PaymentButtonClient<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentButton that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentButtonFindFirstOrThrowArgs} args - Arguments to find a PaymentButton
     * @example
     * // Get one PaymentButton
     * const paymentButton = await prisma.paymentButton.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentButtonFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentButtonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentButtonClient<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentButtons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentButtonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentButtons
     * const paymentButtons = await prisma.paymentButton.findMany()
     * 
     * // Get first 10 PaymentButtons
     * const paymentButtons = await prisma.paymentButton.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentButtonWithIdOnly = await prisma.paymentButton.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentButtonFindManyArgs>(args?: SelectSubset<T, PaymentButtonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentButton.
     * @param {PaymentButtonCreateArgs} args - Arguments to create a PaymentButton.
     * @example
     * // Create one PaymentButton
     * const PaymentButton = await prisma.paymentButton.create({
     *   data: {
     *     // ... data to create a PaymentButton
     *   }
     * })
     * 
     */
    create<T extends PaymentButtonCreateArgs>(args: SelectSubset<T, PaymentButtonCreateArgs<ExtArgs>>): Prisma__PaymentButtonClient<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentButtons.
     * @param {PaymentButtonCreateManyArgs} args - Arguments to create many PaymentButtons.
     * @example
     * // Create many PaymentButtons
     * const paymentButton = await prisma.paymentButton.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentButtonCreateManyArgs>(args?: SelectSubset<T, PaymentButtonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentButtons and returns the data saved in the database.
     * @param {PaymentButtonCreateManyAndReturnArgs} args - Arguments to create many PaymentButtons.
     * @example
     * // Create many PaymentButtons
     * const paymentButton = await prisma.paymentButton.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentButtons and only return the `id`
     * const paymentButtonWithIdOnly = await prisma.paymentButton.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentButtonCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentButtonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentButton.
     * @param {PaymentButtonDeleteArgs} args - Arguments to delete one PaymentButton.
     * @example
     * // Delete one PaymentButton
     * const PaymentButton = await prisma.paymentButton.delete({
     *   where: {
     *     // ... filter to delete one PaymentButton
     *   }
     * })
     * 
     */
    delete<T extends PaymentButtonDeleteArgs>(args: SelectSubset<T, PaymentButtonDeleteArgs<ExtArgs>>): Prisma__PaymentButtonClient<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentButton.
     * @param {PaymentButtonUpdateArgs} args - Arguments to update one PaymentButton.
     * @example
     * // Update one PaymentButton
     * const paymentButton = await prisma.paymentButton.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentButtonUpdateArgs>(args: SelectSubset<T, PaymentButtonUpdateArgs<ExtArgs>>): Prisma__PaymentButtonClient<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentButtons.
     * @param {PaymentButtonDeleteManyArgs} args - Arguments to filter PaymentButtons to delete.
     * @example
     * // Delete a few PaymentButtons
     * const { count } = await prisma.paymentButton.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentButtonDeleteManyArgs>(args?: SelectSubset<T, PaymentButtonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentButtons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentButtonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentButtons
     * const paymentButton = await prisma.paymentButton.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentButtonUpdateManyArgs>(args: SelectSubset<T, PaymentButtonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentButtons and returns the data updated in the database.
     * @param {PaymentButtonUpdateManyAndReturnArgs} args - Arguments to update many PaymentButtons.
     * @example
     * // Update many PaymentButtons
     * const paymentButton = await prisma.paymentButton.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentButtons and only return the `id`
     * const paymentButtonWithIdOnly = await prisma.paymentButton.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentButtonUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentButtonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentButton.
     * @param {PaymentButtonUpsertArgs} args - Arguments to update or create a PaymentButton.
     * @example
     * // Update or create a PaymentButton
     * const paymentButton = await prisma.paymentButton.upsert({
     *   create: {
     *     // ... data to create a PaymentButton
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentButton we want to update
     *   }
     * })
     */
    upsert<T extends PaymentButtonUpsertArgs>(args: SelectSubset<T, PaymentButtonUpsertArgs<ExtArgs>>): Prisma__PaymentButtonClient<$Result.GetResult<Prisma.$PaymentButtonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentButtons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentButtonCountArgs} args - Arguments to filter PaymentButtons to count.
     * @example
     * // Count the number of PaymentButtons
     * const count = await prisma.paymentButton.count({
     *   where: {
     *     // ... the filter for the PaymentButtons we want to count
     *   }
     * })
    **/
    count<T extends PaymentButtonCountArgs>(
      args?: Subset<T, PaymentButtonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentButtonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentButton.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentButtonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentButtonAggregateArgs>(args: Subset<T, PaymentButtonAggregateArgs>): Prisma.PrismaPromise<GetPaymentButtonAggregateType<T>>

    /**
     * Group by PaymentButton.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentButtonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentButtonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentButtonGroupByArgs['orderBy'] }
        : { orderBy?: PaymentButtonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentButtonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentButtonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentButton model
   */
  readonly fields: PaymentButtonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentButton.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentButtonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentButton model
   */
  interface PaymentButtonFieldRefs {
    readonly id: FieldRef<"PaymentButton", 'String'>
    readonly title: FieldRef<"PaymentButton", 'String'>
    readonly type: FieldRef<"PaymentButton", 'PaymentButtonType'>
    readonly description: FieldRef<"PaymentButton", 'String'>
    readonly amount: FieldRef<"PaymentButton", 'Decimal'>
    readonly createdAt: FieldRef<"PaymentButton", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentButton", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentButton findUnique
   */
  export type PaymentButtonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * Filter, which PaymentButton to fetch.
     */
    where: PaymentButtonWhereUniqueInput
  }

  /**
   * PaymentButton findUniqueOrThrow
   */
  export type PaymentButtonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * Filter, which PaymentButton to fetch.
     */
    where: PaymentButtonWhereUniqueInput
  }

  /**
   * PaymentButton findFirst
   */
  export type PaymentButtonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * Filter, which PaymentButton to fetch.
     */
    where?: PaymentButtonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentButtons to fetch.
     */
    orderBy?: PaymentButtonOrderByWithRelationInput | PaymentButtonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentButtons.
     */
    cursor?: PaymentButtonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentButtons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentButtons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentButtons.
     */
    distinct?: PaymentButtonScalarFieldEnum | PaymentButtonScalarFieldEnum[]
  }

  /**
   * PaymentButton findFirstOrThrow
   */
  export type PaymentButtonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * Filter, which PaymentButton to fetch.
     */
    where?: PaymentButtonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentButtons to fetch.
     */
    orderBy?: PaymentButtonOrderByWithRelationInput | PaymentButtonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentButtons.
     */
    cursor?: PaymentButtonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentButtons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentButtons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentButtons.
     */
    distinct?: PaymentButtonScalarFieldEnum | PaymentButtonScalarFieldEnum[]
  }

  /**
   * PaymentButton findMany
   */
  export type PaymentButtonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * Filter, which PaymentButtons to fetch.
     */
    where?: PaymentButtonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentButtons to fetch.
     */
    orderBy?: PaymentButtonOrderByWithRelationInput | PaymentButtonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentButtons.
     */
    cursor?: PaymentButtonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentButtons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentButtons.
     */
    skip?: number
    distinct?: PaymentButtonScalarFieldEnum | PaymentButtonScalarFieldEnum[]
  }

  /**
   * PaymentButton create
   */
  export type PaymentButtonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentButton.
     */
    data: XOR<PaymentButtonCreateInput, PaymentButtonUncheckedCreateInput>
  }

  /**
   * PaymentButton createMany
   */
  export type PaymentButtonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentButtons.
     */
    data: PaymentButtonCreateManyInput | PaymentButtonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentButton createManyAndReturn
   */
  export type PaymentButtonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentButtons.
     */
    data: PaymentButtonCreateManyInput | PaymentButtonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentButton update
   */
  export type PaymentButtonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentButton.
     */
    data: XOR<PaymentButtonUpdateInput, PaymentButtonUncheckedUpdateInput>
    /**
     * Choose, which PaymentButton to update.
     */
    where: PaymentButtonWhereUniqueInput
  }

  /**
   * PaymentButton updateMany
   */
  export type PaymentButtonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentButtons.
     */
    data: XOR<PaymentButtonUpdateManyMutationInput, PaymentButtonUncheckedUpdateManyInput>
    /**
     * Filter which PaymentButtons to update
     */
    where?: PaymentButtonWhereInput
    /**
     * Limit how many PaymentButtons to update.
     */
    limit?: number
  }

  /**
   * PaymentButton updateManyAndReturn
   */
  export type PaymentButtonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * The data used to update PaymentButtons.
     */
    data: XOR<PaymentButtonUpdateManyMutationInput, PaymentButtonUncheckedUpdateManyInput>
    /**
     * Filter which PaymentButtons to update
     */
    where?: PaymentButtonWhereInput
    /**
     * Limit how many PaymentButtons to update.
     */
    limit?: number
  }

  /**
   * PaymentButton upsert
   */
  export type PaymentButtonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentButton to update in case it exists.
     */
    where: PaymentButtonWhereUniqueInput
    /**
     * In case the PaymentButton found by the `where` argument doesn't exist, create a new PaymentButton with this data.
     */
    create: XOR<PaymentButtonCreateInput, PaymentButtonUncheckedCreateInput>
    /**
     * In case the PaymentButton was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentButtonUpdateInput, PaymentButtonUncheckedUpdateInput>
  }

  /**
   * PaymentButton delete
   */
  export type PaymentButtonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
    /**
     * Filter which PaymentButton to delete.
     */
    where: PaymentButtonWhereUniqueInput
  }

  /**
   * PaymentButton deleteMany
   */
  export type PaymentButtonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentButtons to delete
     */
    where?: PaymentButtonWhereInput
    /**
     * Limit how many PaymentButtons to delete.
     */
    limit?: number
  }

  /**
   * PaymentButton without action
   */
  export type PaymentButtonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentButton
     */
    select?: PaymentButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentButton
     */
    omit?: PaymentButtonOmit<ExtArgs> | null
  }


  /**
   * Model PaymentPageForm
   */

  export type AggregatePaymentPageForm = {
    _count: PaymentPageFormCountAggregateOutputType | null
    _min: PaymentPageFormMinAggregateOutputType | null
    _max: PaymentPageFormMaxAggregateOutputType | null
  }

  export type PaymentPageFormMinAggregateOutputType = {
    id: string | null
    paymentPageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPageFormMaxAggregateOutputType = {
    id: string | null
    paymentPageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPageFormCountAggregateOutputType = {
    id: number
    paymentPageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentPageFormMinAggregateInputType = {
    id?: true
    paymentPageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPageFormMaxAggregateInputType = {
    id?: true
    paymentPageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPageFormCountAggregateInputType = {
    id?: true
    paymentPageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentPageFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPageForm to aggregate.
     */
    where?: PaymentPageFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPageForms to fetch.
     */
    orderBy?: PaymentPageFormOrderByWithRelationInput | PaymentPageFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentPageFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPageForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPageForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentPageForms
    **/
    _count?: true | PaymentPageFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentPageFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentPageFormMaxAggregateInputType
  }

  export type GetPaymentPageFormAggregateType<T extends PaymentPageFormAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentPageForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentPageForm[P]>
      : GetScalarType<T[P], AggregatePaymentPageForm[P]>
  }




  export type PaymentPageFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPageFormWhereInput
    orderBy?: PaymentPageFormOrderByWithAggregationInput | PaymentPageFormOrderByWithAggregationInput[]
    by: PaymentPageFormScalarFieldEnum[] | PaymentPageFormScalarFieldEnum
    having?: PaymentPageFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentPageFormCountAggregateInputType | true
    _min?: PaymentPageFormMinAggregateInputType
    _max?: PaymentPageFormMaxAggregateInputType
  }

  export type PaymentPageFormGroupByOutputType = {
    id: string
    paymentPageId: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentPageFormCountAggregateOutputType | null
    _min: PaymentPageFormMinAggregateOutputType | null
    _max: PaymentPageFormMaxAggregateOutputType | null
  }

  type GetPaymentPageFormGroupByPayload<T extends PaymentPageFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentPageFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentPageFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentPageFormGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentPageFormGroupByOutputType[P]>
        }
      >
    >


  export type PaymentPageFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentPageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentPage?: boolean | PaymentPageDefaultArgs<ExtArgs>
    PaymentPageFormField?: boolean | PaymentPageForm$PaymentPageFormFieldArgs<ExtArgs>
    _count?: boolean | PaymentPageFormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPageForm"]>

  export type PaymentPageFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentPageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentPage?: boolean | PaymentPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPageForm"]>

  export type PaymentPageFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentPageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentPage?: boolean | PaymentPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPageForm"]>

  export type PaymentPageFormSelectScalar = {
    id?: boolean
    paymentPageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentPageFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentPageId" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentPageForm"]>
  export type PaymentPageFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentPage?: boolean | PaymentPageDefaultArgs<ExtArgs>
    PaymentPageFormField?: boolean | PaymentPageForm$PaymentPageFormFieldArgs<ExtArgs>
    _count?: boolean | PaymentPageFormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentPageFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentPage?: boolean | PaymentPageDefaultArgs<ExtArgs>
  }
  export type PaymentPageFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentPage?: boolean | PaymentPageDefaultArgs<ExtArgs>
  }

  export type $PaymentPageFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentPageForm"
    objects: {
      paymentPage: Prisma.$PaymentPagePayload<ExtArgs>
      PaymentPageFormField: Prisma.$PaymentPageFormFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentPageId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentPageForm"]>
    composites: {}
  }

  type PaymentPageFormGetPayload<S extends boolean | null | undefined | PaymentPageFormDefaultArgs> = $Result.GetResult<Prisma.$PaymentPageFormPayload, S>

  type PaymentPageFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentPageFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentPageFormCountAggregateInputType | true
    }

  export interface PaymentPageFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentPageForm'], meta: { name: 'PaymentPageForm' } }
    /**
     * Find zero or one PaymentPageForm that matches the filter.
     * @param {PaymentPageFormFindUniqueArgs} args - Arguments to find a PaymentPageForm
     * @example
     * // Get one PaymentPageForm
     * const paymentPageForm = await prisma.paymentPageForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentPageFormFindUniqueArgs>(args: SelectSubset<T, PaymentPageFormFindUniqueArgs<ExtArgs>>): Prisma__PaymentPageFormClient<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentPageForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentPageFormFindUniqueOrThrowArgs} args - Arguments to find a PaymentPageForm
     * @example
     * // Get one PaymentPageForm
     * const paymentPageForm = await prisma.paymentPageForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentPageFormFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentPageFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentPageFormClient<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPageForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFindFirstArgs} args - Arguments to find a PaymentPageForm
     * @example
     * // Get one PaymentPageForm
     * const paymentPageForm = await prisma.paymentPageForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentPageFormFindFirstArgs>(args?: SelectSubset<T, PaymentPageFormFindFirstArgs<ExtArgs>>): Prisma__PaymentPageFormClient<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPageForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFindFirstOrThrowArgs} args - Arguments to find a PaymentPageForm
     * @example
     * // Get one PaymentPageForm
     * const paymentPageForm = await prisma.paymentPageForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentPageFormFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentPageFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentPageFormClient<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentPageForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentPageForms
     * const paymentPageForms = await prisma.paymentPageForm.findMany()
     * 
     * // Get first 10 PaymentPageForms
     * const paymentPageForms = await prisma.paymentPageForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentPageFormWithIdOnly = await prisma.paymentPageForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentPageFormFindManyArgs>(args?: SelectSubset<T, PaymentPageFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentPageForm.
     * @param {PaymentPageFormCreateArgs} args - Arguments to create a PaymentPageForm.
     * @example
     * // Create one PaymentPageForm
     * const PaymentPageForm = await prisma.paymentPageForm.create({
     *   data: {
     *     // ... data to create a PaymentPageForm
     *   }
     * })
     * 
     */
    create<T extends PaymentPageFormCreateArgs>(args: SelectSubset<T, PaymentPageFormCreateArgs<ExtArgs>>): Prisma__PaymentPageFormClient<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentPageForms.
     * @param {PaymentPageFormCreateManyArgs} args - Arguments to create many PaymentPageForms.
     * @example
     * // Create many PaymentPageForms
     * const paymentPageForm = await prisma.paymentPageForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentPageFormCreateManyArgs>(args?: SelectSubset<T, PaymentPageFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentPageForms and returns the data saved in the database.
     * @param {PaymentPageFormCreateManyAndReturnArgs} args - Arguments to create many PaymentPageForms.
     * @example
     * // Create many PaymentPageForms
     * const paymentPageForm = await prisma.paymentPageForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentPageForms and only return the `id`
     * const paymentPageFormWithIdOnly = await prisma.paymentPageForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentPageFormCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentPageFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentPageForm.
     * @param {PaymentPageFormDeleteArgs} args - Arguments to delete one PaymentPageForm.
     * @example
     * // Delete one PaymentPageForm
     * const PaymentPageForm = await prisma.paymentPageForm.delete({
     *   where: {
     *     // ... filter to delete one PaymentPageForm
     *   }
     * })
     * 
     */
    delete<T extends PaymentPageFormDeleteArgs>(args: SelectSubset<T, PaymentPageFormDeleteArgs<ExtArgs>>): Prisma__PaymentPageFormClient<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentPageForm.
     * @param {PaymentPageFormUpdateArgs} args - Arguments to update one PaymentPageForm.
     * @example
     * // Update one PaymentPageForm
     * const paymentPageForm = await prisma.paymentPageForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentPageFormUpdateArgs>(args: SelectSubset<T, PaymentPageFormUpdateArgs<ExtArgs>>): Prisma__PaymentPageFormClient<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentPageForms.
     * @param {PaymentPageFormDeleteManyArgs} args - Arguments to filter PaymentPageForms to delete.
     * @example
     * // Delete a few PaymentPageForms
     * const { count } = await prisma.paymentPageForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentPageFormDeleteManyArgs>(args?: SelectSubset<T, PaymentPageFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPageForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentPageForms
     * const paymentPageForm = await prisma.paymentPageForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentPageFormUpdateManyArgs>(args: SelectSubset<T, PaymentPageFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPageForms and returns the data updated in the database.
     * @param {PaymentPageFormUpdateManyAndReturnArgs} args - Arguments to update many PaymentPageForms.
     * @example
     * // Update many PaymentPageForms
     * const paymentPageForm = await prisma.paymentPageForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentPageForms and only return the `id`
     * const paymentPageFormWithIdOnly = await prisma.paymentPageForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentPageFormUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentPageFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentPageForm.
     * @param {PaymentPageFormUpsertArgs} args - Arguments to update or create a PaymentPageForm.
     * @example
     * // Update or create a PaymentPageForm
     * const paymentPageForm = await prisma.paymentPageForm.upsert({
     *   create: {
     *     // ... data to create a PaymentPageForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentPageForm we want to update
     *   }
     * })
     */
    upsert<T extends PaymentPageFormUpsertArgs>(args: SelectSubset<T, PaymentPageFormUpsertArgs<ExtArgs>>): Prisma__PaymentPageFormClient<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentPageForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormCountArgs} args - Arguments to filter PaymentPageForms to count.
     * @example
     * // Count the number of PaymentPageForms
     * const count = await prisma.paymentPageForm.count({
     *   where: {
     *     // ... the filter for the PaymentPageForms we want to count
     *   }
     * })
    **/
    count<T extends PaymentPageFormCountArgs>(
      args?: Subset<T, PaymentPageFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentPageFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentPageForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentPageFormAggregateArgs>(args: Subset<T, PaymentPageFormAggregateArgs>): Prisma.PrismaPromise<GetPaymentPageFormAggregateType<T>>

    /**
     * Group by PaymentPageForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentPageFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentPageFormGroupByArgs['orderBy'] }
        : { orderBy?: PaymentPageFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentPageFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentPageFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentPageForm model
   */
  readonly fields: PaymentPageFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentPageForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentPageFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentPage<T extends PaymentPageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentPageDefaultArgs<ExtArgs>>): Prisma__PaymentPageClient<$Result.GetResult<Prisma.$PaymentPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PaymentPageFormField<T extends PaymentPageForm$PaymentPageFormFieldArgs<ExtArgs> = {}>(args?: Subset<T, PaymentPageForm$PaymentPageFormFieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentPageForm model
   */
  interface PaymentPageFormFieldRefs {
    readonly id: FieldRef<"PaymentPageForm", 'String'>
    readonly paymentPageId: FieldRef<"PaymentPageForm", 'String'>
    readonly createdAt: FieldRef<"PaymentPageForm", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentPageForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentPageForm findUnique
   */
  export type PaymentPageFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageForm to fetch.
     */
    where: PaymentPageFormWhereUniqueInput
  }

  /**
   * PaymentPageForm findUniqueOrThrow
   */
  export type PaymentPageFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageForm to fetch.
     */
    where: PaymentPageFormWhereUniqueInput
  }

  /**
   * PaymentPageForm findFirst
   */
  export type PaymentPageFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageForm to fetch.
     */
    where?: PaymentPageFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPageForms to fetch.
     */
    orderBy?: PaymentPageFormOrderByWithRelationInput | PaymentPageFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPageForms.
     */
    cursor?: PaymentPageFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPageForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPageForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPageForms.
     */
    distinct?: PaymentPageFormScalarFieldEnum | PaymentPageFormScalarFieldEnum[]
  }

  /**
   * PaymentPageForm findFirstOrThrow
   */
  export type PaymentPageFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageForm to fetch.
     */
    where?: PaymentPageFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPageForms to fetch.
     */
    orderBy?: PaymentPageFormOrderByWithRelationInput | PaymentPageFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPageForms.
     */
    cursor?: PaymentPageFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPageForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPageForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPageForms.
     */
    distinct?: PaymentPageFormScalarFieldEnum | PaymentPageFormScalarFieldEnum[]
  }

  /**
   * PaymentPageForm findMany
   */
  export type PaymentPageFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageForms to fetch.
     */
    where?: PaymentPageFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPageForms to fetch.
     */
    orderBy?: PaymentPageFormOrderByWithRelationInput | PaymentPageFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentPageForms.
     */
    cursor?: PaymentPageFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPageForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPageForms.
     */
    skip?: number
    distinct?: PaymentPageFormScalarFieldEnum | PaymentPageFormScalarFieldEnum[]
  }

  /**
   * PaymentPageForm create
   */
  export type PaymentPageFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentPageForm.
     */
    data: XOR<PaymentPageFormCreateInput, PaymentPageFormUncheckedCreateInput>
  }

  /**
   * PaymentPageForm createMany
   */
  export type PaymentPageFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentPageForms.
     */
    data: PaymentPageFormCreateManyInput | PaymentPageFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPageForm createManyAndReturn
   */
  export type PaymentPageFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentPageForms.
     */
    data: PaymentPageFormCreateManyInput | PaymentPageFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentPageForm update
   */
  export type PaymentPageFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentPageForm.
     */
    data: XOR<PaymentPageFormUpdateInput, PaymentPageFormUncheckedUpdateInput>
    /**
     * Choose, which PaymentPageForm to update.
     */
    where: PaymentPageFormWhereUniqueInput
  }

  /**
   * PaymentPageForm updateMany
   */
  export type PaymentPageFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentPageForms.
     */
    data: XOR<PaymentPageFormUpdateManyMutationInput, PaymentPageFormUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPageForms to update
     */
    where?: PaymentPageFormWhereInput
    /**
     * Limit how many PaymentPageForms to update.
     */
    limit?: number
  }

  /**
   * PaymentPageForm updateManyAndReturn
   */
  export type PaymentPageFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * The data used to update PaymentPageForms.
     */
    data: XOR<PaymentPageFormUpdateManyMutationInput, PaymentPageFormUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPageForms to update
     */
    where?: PaymentPageFormWhereInput
    /**
     * Limit how many PaymentPageForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentPageForm upsert
   */
  export type PaymentPageFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentPageForm to update in case it exists.
     */
    where: PaymentPageFormWhereUniqueInput
    /**
     * In case the PaymentPageForm found by the `where` argument doesn't exist, create a new PaymentPageForm with this data.
     */
    create: XOR<PaymentPageFormCreateInput, PaymentPageFormUncheckedCreateInput>
    /**
     * In case the PaymentPageForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentPageFormUpdateInput, PaymentPageFormUncheckedUpdateInput>
  }

  /**
   * PaymentPageForm delete
   */
  export type PaymentPageFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
    /**
     * Filter which PaymentPageForm to delete.
     */
    where: PaymentPageFormWhereUniqueInput
  }

  /**
   * PaymentPageForm deleteMany
   */
  export type PaymentPageFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPageForms to delete
     */
    where?: PaymentPageFormWhereInput
    /**
     * Limit how many PaymentPageForms to delete.
     */
    limit?: number
  }

  /**
   * PaymentPageForm.PaymentPageFormField
   */
  export type PaymentPageForm$PaymentPageFormFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    where?: PaymentPageFormFieldWhereInput
    orderBy?: PaymentPageFormFieldOrderByWithRelationInput | PaymentPageFormFieldOrderByWithRelationInput[]
    cursor?: PaymentPageFormFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentPageFormFieldScalarFieldEnum | PaymentPageFormFieldScalarFieldEnum[]
  }

  /**
   * PaymentPageForm without action
   */
  export type PaymentPageFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageForm
     */
    select?: PaymentPageFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageForm
     */
    omit?: PaymentPageFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormInclude<ExtArgs> | null
  }


  /**
   * Model PaymentPageFormField
   */

  export type AggregatePaymentPageFormField = {
    _count: PaymentPageFormFieldCountAggregateOutputType | null
    _min: PaymentPageFormFieldMinAggregateOutputType | null
    _max: PaymentPageFormFieldMaxAggregateOutputType | null
  }

  export type PaymentPageFormFieldMinAggregateOutputType = {
    id: string | null
    type: $Enums.PaymentPageFormFieldType | null
    label: string | null
    placeholder: string | null
    required: boolean | null
    value: string | null
    paymentPageFormId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPageFormFieldMaxAggregateOutputType = {
    id: string | null
    type: $Enums.PaymentPageFormFieldType | null
    label: string | null
    placeholder: string | null
    required: boolean | null
    value: string | null
    paymentPageFormId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPageFormFieldCountAggregateOutputType = {
    id: number
    type: number
    label: number
    placeholder: number
    required: number
    value: number
    paymentPageFormId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentPageFormFieldMinAggregateInputType = {
    id?: true
    type?: true
    label?: true
    placeholder?: true
    required?: true
    value?: true
    paymentPageFormId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPageFormFieldMaxAggregateInputType = {
    id?: true
    type?: true
    label?: true
    placeholder?: true
    required?: true
    value?: true
    paymentPageFormId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPageFormFieldCountAggregateInputType = {
    id?: true
    type?: true
    label?: true
    placeholder?: true
    required?: true
    value?: true
    paymentPageFormId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentPageFormFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPageFormField to aggregate.
     */
    where?: PaymentPageFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPageFormFields to fetch.
     */
    orderBy?: PaymentPageFormFieldOrderByWithRelationInput | PaymentPageFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentPageFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPageFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPageFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentPageFormFields
    **/
    _count?: true | PaymentPageFormFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentPageFormFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentPageFormFieldMaxAggregateInputType
  }

  export type GetPaymentPageFormFieldAggregateType<T extends PaymentPageFormFieldAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentPageFormField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentPageFormField[P]>
      : GetScalarType<T[P], AggregatePaymentPageFormField[P]>
  }




  export type PaymentPageFormFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPageFormFieldWhereInput
    orderBy?: PaymentPageFormFieldOrderByWithAggregationInput | PaymentPageFormFieldOrderByWithAggregationInput[]
    by: PaymentPageFormFieldScalarFieldEnum[] | PaymentPageFormFieldScalarFieldEnum
    having?: PaymentPageFormFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentPageFormFieldCountAggregateInputType | true
    _min?: PaymentPageFormFieldMinAggregateInputType
    _max?: PaymentPageFormFieldMaxAggregateInputType
  }

  export type PaymentPageFormFieldGroupByOutputType = {
    id: string
    type: $Enums.PaymentPageFormFieldType
    label: string
    placeholder: string | null
    required: boolean
    value: string | null
    paymentPageFormId: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentPageFormFieldCountAggregateOutputType | null
    _min: PaymentPageFormFieldMinAggregateOutputType | null
    _max: PaymentPageFormFieldMaxAggregateOutputType | null
  }

  type GetPaymentPageFormFieldGroupByPayload<T extends PaymentPageFormFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentPageFormFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentPageFormFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentPageFormFieldGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentPageFormFieldGroupByOutputType[P]>
        }
      >
    >


  export type PaymentPageFormFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    label?: boolean
    placeholder?: boolean
    required?: boolean
    value?: boolean
    paymentPageFormId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentPageForm?: boolean | PaymentPageFormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPageFormField"]>

  export type PaymentPageFormFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    label?: boolean
    placeholder?: boolean
    required?: boolean
    value?: boolean
    paymentPageFormId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentPageForm?: boolean | PaymentPageFormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPageFormField"]>

  export type PaymentPageFormFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    label?: boolean
    placeholder?: boolean
    required?: boolean
    value?: boolean
    paymentPageFormId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentPageForm?: boolean | PaymentPageFormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPageFormField"]>

  export type PaymentPageFormFieldSelectScalar = {
    id?: boolean
    type?: boolean
    label?: boolean
    placeholder?: boolean
    required?: boolean
    value?: boolean
    paymentPageFormId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentPageFormFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "label" | "placeholder" | "required" | "value" | "paymentPageFormId" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentPageFormField"]>
  export type PaymentPageFormFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentPageForm?: boolean | PaymentPageFormDefaultArgs<ExtArgs>
  }
  export type PaymentPageFormFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentPageForm?: boolean | PaymentPageFormDefaultArgs<ExtArgs>
  }
  export type PaymentPageFormFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentPageForm?: boolean | PaymentPageFormDefaultArgs<ExtArgs>
  }

  export type $PaymentPageFormFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentPageFormField"
    objects: {
      paymentPageForm: Prisma.$PaymentPageFormPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.PaymentPageFormFieldType
      label: string
      placeholder: string | null
      required: boolean
      value: string | null
      paymentPageFormId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentPageFormField"]>
    composites: {}
  }

  type PaymentPageFormFieldGetPayload<S extends boolean | null | undefined | PaymentPageFormFieldDefaultArgs> = $Result.GetResult<Prisma.$PaymentPageFormFieldPayload, S>

  type PaymentPageFormFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentPageFormFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentPageFormFieldCountAggregateInputType | true
    }

  export interface PaymentPageFormFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentPageFormField'], meta: { name: 'PaymentPageFormField' } }
    /**
     * Find zero or one PaymentPageFormField that matches the filter.
     * @param {PaymentPageFormFieldFindUniqueArgs} args - Arguments to find a PaymentPageFormField
     * @example
     * // Get one PaymentPageFormField
     * const paymentPageFormField = await prisma.paymentPageFormField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentPageFormFieldFindUniqueArgs>(args: SelectSubset<T, PaymentPageFormFieldFindUniqueArgs<ExtArgs>>): Prisma__PaymentPageFormFieldClient<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentPageFormField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentPageFormFieldFindUniqueOrThrowArgs} args - Arguments to find a PaymentPageFormField
     * @example
     * // Get one PaymentPageFormField
     * const paymentPageFormField = await prisma.paymentPageFormField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentPageFormFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentPageFormFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentPageFormFieldClient<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPageFormField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFieldFindFirstArgs} args - Arguments to find a PaymentPageFormField
     * @example
     * // Get one PaymentPageFormField
     * const paymentPageFormField = await prisma.paymentPageFormField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentPageFormFieldFindFirstArgs>(args?: SelectSubset<T, PaymentPageFormFieldFindFirstArgs<ExtArgs>>): Prisma__PaymentPageFormFieldClient<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPageFormField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFieldFindFirstOrThrowArgs} args - Arguments to find a PaymentPageFormField
     * @example
     * // Get one PaymentPageFormField
     * const paymentPageFormField = await prisma.paymentPageFormField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentPageFormFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentPageFormFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentPageFormFieldClient<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentPageFormFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentPageFormFields
     * const paymentPageFormFields = await prisma.paymentPageFormField.findMany()
     * 
     * // Get first 10 PaymentPageFormFields
     * const paymentPageFormFields = await prisma.paymentPageFormField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentPageFormFieldWithIdOnly = await prisma.paymentPageFormField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentPageFormFieldFindManyArgs>(args?: SelectSubset<T, PaymentPageFormFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentPageFormField.
     * @param {PaymentPageFormFieldCreateArgs} args - Arguments to create a PaymentPageFormField.
     * @example
     * // Create one PaymentPageFormField
     * const PaymentPageFormField = await prisma.paymentPageFormField.create({
     *   data: {
     *     // ... data to create a PaymentPageFormField
     *   }
     * })
     * 
     */
    create<T extends PaymentPageFormFieldCreateArgs>(args: SelectSubset<T, PaymentPageFormFieldCreateArgs<ExtArgs>>): Prisma__PaymentPageFormFieldClient<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentPageFormFields.
     * @param {PaymentPageFormFieldCreateManyArgs} args - Arguments to create many PaymentPageFormFields.
     * @example
     * // Create many PaymentPageFormFields
     * const paymentPageFormField = await prisma.paymentPageFormField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentPageFormFieldCreateManyArgs>(args?: SelectSubset<T, PaymentPageFormFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentPageFormFields and returns the data saved in the database.
     * @param {PaymentPageFormFieldCreateManyAndReturnArgs} args - Arguments to create many PaymentPageFormFields.
     * @example
     * // Create many PaymentPageFormFields
     * const paymentPageFormField = await prisma.paymentPageFormField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentPageFormFields and only return the `id`
     * const paymentPageFormFieldWithIdOnly = await prisma.paymentPageFormField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentPageFormFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentPageFormFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentPageFormField.
     * @param {PaymentPageFormFieldDeleteArgs} args - Arguments to delete one PaymentPageFormField.
     * @example
     * // Delete one PaymentPageFormField
     * const PaymentPageFormField = await prisma.paymentPageFormField.delete({
     *   where: {
     *     // ... filter to delete one PaymentPageFormField
     *   }
     * })
     * 
     */
    delete<T extends PaymentPageFormFieldDeleteArgs>(args: SelectSubset<T, PaymentPageFormFieldDeleteArgs<ExtArgs>>): Prisma__PaymentPageFormFieldClient<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentPageFormField.
     * @param {PaymentPageFormFieldUpdateArgs} args - Arguments to update one PaymentPageFormField.
     * @example
     * // Update one PaymentPageFormField
     * const paymentPageFormField = await prisma.paymentPageFormField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentPageFormFieldUpdateArgs>(args: SelectSubset<T, PaymentPageFormFieldUpdateArgs<ExtArgs>>): Prisma__PaymentPageFormFieldClient<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentPageFormFields.
     * @param {PaymentPageFormFieldDeleteManyArgs} args - Arguments to filter PaymentPageFormFields to delete.
     * @example
     * // Delete a few PaymentPageFormFields
     * const { count } = await prisma.paymentPageFormField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentPageFormFieldDeleteManyArgs>(args?: SelectSubset<T, PaymentPageFormFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPageFormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentPageFormFields
     * const paymentPageFormField = await prisma.paymentPageFormField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentPageFormFieldUpdateManyArgs>(args: SelectSubset<T, PaymentPageFormFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPageFormFields and returns the data updated in the database.
     * @param {PaymentPageFormFieldUpdateManyAndReturnArgs} args - Arguments to update many PaymentPageFormFields.
     * @example
     * // Update many PaymentPageFormFields
     * const paymentPageFormField = await prisma.paymentPageFormField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentPageFormFields and only return the `id`
     * const paymentPageFormFieldWithIdOnly = await prisma.paymentPageFormField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentPageFormFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentPageFormFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentPageFormField.
     * @param {PaymentPageFormFieldUpsertArgs} args - Arguments to update or create a PaymentPageFormField.
     * @example
     * // Update or create a PaymentPageFormField
     * const paymentPageFormField = await prisma.paymentPageFormField.upsert({
     *   create: {
     *     // ... data to create a PaymentPageFormField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentPageFormField we want to update
     *   }
     * })
     */
    upsert<T extends PaymentPageFormFieldUpsertArgs>(args: SelectSubset<T, PaymentPageFormFieldUpsertArgs<ExtArgs>>): Prisma__PaymentPageFormFieldClient<$Result.GetResult<Prisma.$PaymentPageFormFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentPageFormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFieldCountArgs} args - Arguments to filter PaymentPageFormFields to count.
     * @example
     * // Count the number of PaymentPageFormFields
     * const count = await prisma.paymentPageFormField.count({
     *   where: {
     *     // ... the filter for the PaymentPageFormFields we want to count
     *   }
     * })
    **/
    count<T extends PaymentPageFormFieldCountArgs>(
      args?: Subset<T, PaymentPageFormFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentPageFormFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentPageFormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentPageFormFieldAggregateArgs>(args: Subset<T, PaymentPageFormFieldAggregateArgs>): Prisma.PrismaPromise<GetPaymentPageFormFieldAggregateType<T>>

    /**
     * Group by PaymentPageFormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPageFormFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentPageFormFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentPageFormFieldGroupByArgs['orderBy'] }
        : { orderBy?: PaymentPageFormFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentPageFormFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentPageFormFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentPageFormField model
   */
  readonly fields: PaymentPageFormFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentPageFormField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentPageFormFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentPageForm<T extends PaymentPageFormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentPageFormDefaultArgs<ExtArgs>>): Prisma__PaymentPageFormClient<$Result.GetResult<Prisma.$PaymentPageFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentPageFormField model
   */
  interface PaymentPageFormFieldFieldRefs {
    readonly id: FieldRef<"PaymentPageFormField", 'String'>
    readonly type: FieldRef<"PaymentPageFormField", 'PaymentPageFormFieldType'>
    readonly label: FieldRef<"PaymentPageFormField", 'String'>
    readonly placeholder: FieldRef<"PaymentPageFormField", 'String'>
    readonly required: FieldRef<"PaymentPageFormField", 'Boolean'>
    readonly value: FieldRef<"PaymentPageFormField", 'String'>
    readonly paymentPageFormId: FieldRef<"PaymentPageFormField", 'String'>
    readonly createdAt: FieldRef<"PaymentPageFormField", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentPageFormField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentPageFormField findUnique
   */
  export type PaymentPageFormFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageFormField to fetch.
     */
    where: PaymentPageFormFieldWhereUniqueInput
  }

  /**
   * PaymentPageFormField findUniqueOrThrow
   */
  export type PaymentPageFormFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageFormField to fetch.
     */
    where: PaymentPageFormFieldWhereUniqueInput
  }

  /**
   * PaymentPageFormField findFirst
   */
  export type PaymentPageFormFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageFormField to fetch.
     */
    where?: PaymentPageFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPageFormFields to fetch.
     */
    orderBy?: PaymentPageFormFieldOrderByWithRelationInput | PaymentPageFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPageFormFields.
     */
    cursor?: PaymentPageFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPageFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPageFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPageFormFields.
     */
    distinct?: PaymentPageFormFieldScalarFieldEnum | PaymentPageFormFieldScalarFieldEnum[]
  }

  /**
   * PaymentPageFormField findFirstOrThrow
   */
  export type PaymentPageFormFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageFormField to fetch.
     */
    where?: PaymentPageFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPageFormFields to fetch.
     */
    orderBy?: PaymentPageFormFieldOrderByWithRelationInput | PaymentPageFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPageFormFields.
     */
    cursor?: PaymentPageFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPageFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPageFormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPageFormFields.
     */
    distinct?: PaymentPageFormFieldScalarFieldEnum | PaymentPageFormFieldScalarFieldEnum[]
  }

  /**
   * PaymentPageFormField findMany
   */
  export type PaymentPageFormFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPageFormFields to fetch.
     */
    where?: PaymentPageFormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPageFormFields to fetch.
     */
    orderBy?: PaymentPageFormFieldOrderByWithRelationInput | PaymentPageFormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentPageFormFields.
     */
    cursor?: PaymentPageFormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPageFormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPageFormFields.
     */
    skip?: number
    distinct?: PaymentPageFormFieldScalarFieldEnum | PaymentPageFormFieldScalarFieldEnum[]
  }

  /**
   * PaymentPageFormField create
   */
  export type PaymentPageFormFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentPageFormField.
     */
    data: XOR<PaymentPageFormFieldCreateInput, PaymentPageFormFieldUncheckedCreateInput>
  }

  /**
   * PaymentPageFormField createMany
   */
  export type PaymentPageFormFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentPageFormFields.
     */
    data: PaymentPageFormFieldCreateManyInput | PaymentPageFormFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPageFormField createManyAndReturn
   */
  export type PaymentPageFormFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentPageFormFields.
     */
    data: PaymentPageFormFieldCreateManyInput | PaymentPageFormFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentPageFormField update
   */
  export type PaymentPageFormFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentPageFormField.
     */
    data: XOR<PaymentPageFormFieldUpdateInput, PaymentPageFormFieldUncheckedUpdateInput>
    /**
     * Choose, which PaymentPageFormField to update.
     */
    where: PaymentPageFormFieldWhereUniqueInput
  }

  /**
   * PaymentPageFormField updateMany
   */
  export type PaymentPageFormFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentPageFormFields.
     */
    data: XOR<PaymentPageFormFieldUpdateManyMutationInput, PaymentPageFormFieldUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPageFormFields to update
     */
    where?: PaymentPageFormFieldWhereInput
    /**
     * Limit how many PaymentPageFormFields to update.
     */
    limit?: number
  }

  /**
   * PaymentPageFormField updateManyAndReturn
   */
  export type PaymentPageFormFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * The data used to update PaymentPageFormFields.
     */
    data: XOR<PaymentPageFormFieldUpdateManyMutationInput, PaymentPageFormFieldUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPageFormFields to update
     */
    where?: PaymentPageFormFieldWhereInput
    /**
     * Limit how many PaymentPageFormFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentPageFormField upsert
   */
  export type PaymentPageFormFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentPageFormField to update in case it exists.
     */
    where: PaymentPageFormFieldWhereUniqueInput
    /**
     * In case the PaymentPageFormField found by the `where` argument doesn't exist, create a new PaymentPageFormField with this data.
     */
    create: XOR<PaymentPageFormFieldCreateInput, PaymentPageFormFieldUncheckedCreateInput>
    /**
     * In case the PaymentPageFormField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentPageFormFieldUpdateInput, PaymentPageFormFieldUncheckedUpdateInput>
  }

  /**
   * PaymentPageFormField delete
   */
  export type PaymentPageFormFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
    /**
     * Filter which PaymentPageFormField to delete.
     */
    where: PaymentPageFormFieldWhereUniqueInput
  }

  /**
   * PaymentPageFormField deleteMany
   */
  export type PaymentPageFormFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPageFormFields to delete
     */
    where?: PaymentPageFormFieldWhereInput
    /**
     * Limit how many PaymentPageFormFields to delete.
     */
    limit?: number
  }

  /**
   * PaymentPageFormField without action
   */
  export type PaymentPageFormFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPageFormField
     */
    select?: PaymentPageFormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPageFormField
     */
    omit?: PaymentPageFormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPageFormFieldInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const AuthenticatorScalarFieldEnum: {
    credentialID: 'credentialID',
    userId: 'userId',
    providerAccountId: 'providerAccountId',
    credentialPublicKey: 'credentialPublicKey',
    counter: 'counter',
    credentialDeviceType: 'credentialDeviceType',
    credentialBackedUp: 'credentialBackedUp',
    transports: 'transports'
  };

  export type AuthenticatorScalarFieldEnum = (typeof AuthenticatorScalarFieldEnum)[keyof typeof AuthenticatorScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    userId: 'userId',
    stableCoinId: 'stableCoinId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const StableCoinScalarFieldEnum: {
    id: 'id',
    name: 'name',
    symbol: 'symbol',
    logoUrl: 'logoUrl',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StableCoinScalarFieldEnum = (typeof StableCoinScalarFieldEnum)[keyof typeof StableCoinScalarFieldEnum]


  export const PaymentLinkScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    description: 'description',
    userId: 'userId'
  };

  export type PaymentLinkScalarFieldEnum = (typeof PaymentLinkScalarFieldEnum)[keyof typeof PaymentLinkScalarFieldEnum]


  export const PaymentPageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    logoUrl: 'logoUrl',
    amount: 'amount',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type PaymentPageScalarFieldEnum = (typeof PaymentPageScalarFieldEnum)[keyof typeof PaymentPageScalarFieldEnum]


  export const IntiatedPaymentScalarFieldEnum: {
    id: 'id',
    initiatedFrom: 'initiatedFrom',
    status: 'status',
    index: 'index',
    walletAddress: 'walletAddress',
    amount: 'amount',
    paymentPageId: 'paymentPageId',
    paymentLinkId: 'paymentLinkId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntiatedPaymentScalarFieldEnum = (typeof IntiatedPaymentScalarFieldEnum)[keyof typeof IntiatedPaymentScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    amount: 'amount',
    intiatedPaymentId: 'intiatedPaymentId',
    initiatedFrom: 'initiatedFrom',
    toAddress: 'toAddress',
    fromAddress: 'fromAddress',
    settled: 'settled',
    settledAt: 'settledAt',
    settledTo: 'settledTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PaymentButtonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    description: 'description',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentButtonScalarFieldEnum = (typeof PaymentButtonScalarFieldEnum)[keyof typeof PaymentButtonScalarFieldEnum]


  export const PaymentPageFormScalarFieldEnum: {
    id: 'id',
    paymentPageId: 'paymentPageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentPageFormScalarFieldEnum = (typeof PaymentPageFormScalarFieldEnum)[keyof typeof PaymentPageFormScalarFieldEnum]


  export const PaymentPageFormFieldScalarFieldEnum: {
    id: 'id',
    type: 'type',
    label: 'label',
    placeholder: 'placeholder',
    required: 'required',
    value: 'value',
    paymentPageFormId: 'paymentPageFormId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentPageFormFieldScalarFieldEnum = (typeof PaymentPageFormFieldScalarFieldEnum)[keyof typeof PaymentPageFormFieldScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentLinkStatus'
   */
  export type EnumPaymentLinkStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentLinkStatus'>
    


  /**
   * Reference to a field of type 'PaymentLinkStatus[]'
   */
  export type ListEnumPaymentLinkStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentLinkStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentPageStatus'
   */
  export type EnumPaymentPageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPageStatus'>
    


  /**
   * Reference to a field of type 'PaymentPageStatus[]'
   */
  export type ListEnumPaymentPageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPageStatus[]'>
    


  /**
   * Reference to a field of type 'IntiatedFrom'
   */
  export type EnumIntiatedFromFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntiatedFrom'>
    


  /**
   * Reference to a field of type 'IntiatedFrom[]'
   */
  export type ListEnumIntiatedFromFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntiatedFrom[]'>
    


  /**
   * Reference to a field of type 'IntiatedPaymentStatus'
   */
  export type EnumIntiatedPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntiatedPaymentStatus'>
    


  /**
   * Reference to a field of type 'IntiatedPaymentStatus[]'
   */
  export type ListEnumIntiatedPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntiatedPaymentStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentButtonType'
   */
  export type EnumPaymentButtonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentButtonType'>
    


  /**
   * Reference to a field of type 'PaymentButtonType[]'
   */
  export type ListEnumPaymentButtonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentButtonType[]'>
    


  /**
   * Reference to a field of type 'PaymentPageFormFieldType'
   */
  export type EnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPageFormFieldType'>
    


  /**
   * Reference to a field of type 'PaymentPageFormFieldType[]'
   */
  export type ListEnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPageFormFieldType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Authenticator?: AuthenticatorListRelationFilter
    PaymentLink?: PaymentLinkListRelationFilter
    Wallet?: WalletListRelationFilter
    PaymentPage?: PaymentPageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    Authenticator?: AuthenticatorOrderByRelationAggregateInput
    PaymentLink?: PaymentLinkOrderByRelationAggregateInput
    Wallet?: WalletOrderByRelationAggregateInput
    PaymentPage?: PaymentPageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Authenticator?: AuthenticatorListRelationFilter
    PaymentLink?: PaymentLinkListRelationFilter
    Wallet?: WalletListRelationFilter
    PaymentPage?: PaymentPageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AuthenticatorWhereInput = {
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthenticatorOrderByWithRelationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthenticatorWhereUniqueInput = Prisma.AtLeast<{
    credentialID?: string
    userId_credentialID?: AuthenticatorUserIdCredentialIDCompoundUniqueInput
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_credentialID" | "credentialID">

  export type AuthenticatorOrderByWithAggregationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    _count?: AuthenticatorCountOrderByAggregateInput
    _avg?: AuthenticatorAvgOrderByAggregateInput
    _max?: AuthenticatorMaxOrderByAggregateInput
    _min?: AuthenticatorMinOrderByAggregateInput
    _sum?: AuthenticatorSumOrderByAggregateInput
  }

  export type AuthenticatorScalarWhereWithAggregatesInput = {
    AND?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    OR?: AuthenticatorScalarWhereWithAggregatesInput[]
    NOT?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    credentialID?: StringWithAggregatesFilter<"Authenticator"> | string
    userId?: StringWithAggregatesFilter<"Authenticator"> | string
    providerAccountId?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialPublicKey?: StringWithAggregatesFilter<"Authenticator"> | string
    counter?: IntWithAggregatesFilter<"Authenticator"> | number
    credentialDeviceType?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialBackedUp?: BoolWithAggregatesFilter<"Authenticator"> | boolean
    transports?: StringNullableWithAggregatesFilter<"Authenticator"> | string | null
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: StringFilter<"Wallet"> | string
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"Wallet"> | string
    stableCoinId?: StringFilter<"Wallet"> | string
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    stableCoin?: XOR<StableCoinScalarRelationFilter, StableCoinWhereInput>
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    stableCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    stableCoin?: StableCoinOrderByWithRelationInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"Wallet"> | string
    stableCoinId?: StringFilter<"Wallet"> | string
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    stableCoin?: XOR<StableCoinScalarRelationFilter, StableCoinWhereInput>
  }, "id">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    stableCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallet"> | string
    balance?: DecimalWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    userId?: StringWithAggregatesFilter<"Wallet"> | string
    stableCoinId?: StringWithAggregatesFilter<"Wallet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type StableCoinWhereInput = {
    AND?: StableCoinWhereInput | StableCoinWhereInput[]
    OR?: StableCoinWhereInput[]
    NOT?: StableCoinWhereInput | StableCoinWhereInput[]
    id?: StringFilter<"StableCoin"> | string
    name?: StringFilter<"StableCoin"> | string
    symbol?: StringFilter<"StableCoin"> | string
    logoUrl?: StringNullableFilter<"StableCoin"> | string | null
    description?: StringNullableFilter<"StableCoin"> | string | null
    createdAt?: DateTimeFilter<"StableCoin"> | Date | string
    updatedAt?: DateTimeFilter<"StableCoin"> | Date | string
    Wallet?: WalletListRelationFilter
  }

  export type StableCoinOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Wallet?: WalletOrderByRelationAggregateInput
  }

  export type StableCoinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    symbol?: string
    AND?: StableCoinWhereInput | StableCoinWhereInput[]
    OR?: StableCoinWhereInput[]
    NOT?: StableCoinWhereInput | StableCoinWhereInput[]
    name?: StringFilter<"StableCoin"> | string
    logoUrl?: StringNullableFilter<"StableCoin"> | string | null
    description?: StringNullableFilter<"StableCoin"> | string | null
    createdAt?: DateTimeFilter<"StableCoin"> | Date | string
    updatedAt?: DateTimeFilter<"StableCoin"> | Date | string
    Wallet?: WalletListRelationFilter
  }, "id" | "symbol">

  export type StableCoinOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StableCoinCountOrderByAggregateInput
    _max?: StableCoinMaxOrderByAggregateInput
    _min?: StableCoinMinOrderByAggregateInput
  }

  export type StableCoinScalarWhereWithAggregatesInput = {
    AND?: StableCoinScalarWhereWithAggregatesInput | StableCoinScalarWhereWithAggregatesInput[]
    OR?: StableCoinScalarWhereWithAggregatesInput[]
    NOT?: StableCoinScalarWhereWithAggregatesInput | StableCoinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StableCoin"> | string
    name?: StringWithAggregatesFilter<"StableCoin"> | string
    symbol?: StringWithAggregatesFilter<"StableCoin"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"StableCoin"> | string | null
    description?: StringNullableWithAggregatesFilter<"StableCoin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StableCoin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StableCoin"> | Date | string
  }

  export type PaymentLinkWhereInput = {
    AND?: PaymentLinkWhereInput | PaymentLinkWhereInput[]
    OR?: PaymentLinkWhereInput[]
    NOT?: PaymentLinkWhereInput | PaymentLinkWhereInput[]
    id?: StringFilter<"PaymentLink"> | string
    amount?: DecimalFilter<"PaymentLink"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFilter<"PaymentLink"> | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFilter<"PaymentLink"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentLink"> | Date | string
    expiresAt?: DateTimeNullableFilter<"PaymentLink"> | Date | string | null
    description?: StringNullableFilter<"PaymentLink"> | string | null
    userId?: StringFilter<"PaymentLink"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    IntiatedPayment?: IntiatedPaymentListRelationFilter
  }

  export type PaymentLinkOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    IntiatedPayment?: IntiatedPaymentOrderByRelationAggregateInput
  }

  export type PaymentLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentLinkWhereInput | PaymentLinkWhereInput[]
    OR?: PaymentLinkWhereInput[]
    NOT?: PaymentLinkWhereInput | PaymentLinkWhereInput[]
    amount?: DecimalFilter<"PaymentLink"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFilter<"PaymentLink"> | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFilter<"PaymentLink"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentLink"> | Date | string
    expiresAt?: DateTimeNullableFilter<"PaymentLink"> | Date | string | null
    description?: StringNullableFilter<"PaymentLink"> | string | null
    userId?: StringFilter<"PaymentLink"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    IntiatedPayment?: IntiatedPaymentListRelationFilter
  }, "id">

  export type PaymentLinkOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: PaymentLinkCountOrderByAggregateInput
    _avg?: PaymentLinkAvgOrderByAggregateInput
    _max?: PaymentLinkMaxOrderByAggregateInput
    _min?: PaymentLinkMinOrderByAggregateInput
    _sum?: PaymentLinkSumOrderByAggregateInput
  }

  export type PaymentLinkScalarWhereWithAggregatesInput = {
    AND?: PaymentLinkScalarWhereWithAggregatesInput | PaymentLinkScalarWhereWithAggregatesInput[]
    OR?: PaymentLinkScalarWhereWithAggregatesInput[]
    NOT?: PaymentLinkScalarWhereWithAggregatesInput | PaymentLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentLink"> | string
    amount?: DecimalWithAggregatesFilter<"PaymentLink"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusWithAggregatesFilter<"PaymentLink"> | $Enums.PaymentLinkStatus
    createdAt?: DateTimeWithAggregatesFilter<"PaymentLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentLink"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"PaymentLink"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"PaymentLink"> | string | null
    userId?: StringWithAggregatesFilter<"PaymentLink"> | string
  }

  export type PaymentPageWhereInput = {
    AND?: PaymentPageWhereInput | PaymentPageWhereInput[]
    OR?: PaymentPageWhereInput[]
    NOT?: PaymentPageWhereInput | PaymentPageWhereInput[]
    id?: StringFilter<"PaymentPage"> | string
    title?: StringFilter<"PaymentPage"> | string
    description?: StringNullableFilter<"PaymentPage"> | string | null
    logoUrl?: StringFilter<"PaymentPage"> | string
    amount?: DecimalFilter<"PaymentPage"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"PaymentPage"> | string
    expiresAt?: DateTimeNullableFilter<"PaymentPage"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentPage"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPage"> | Date | string
    status?: EnumPaymentPageStatusFilter<"PaymentPage"> | $Enums.PaymentPageStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    IntiatedPayment?: IntiatedPaymentListRelationFilter
    PaymentPageForm?: PaymentPageFormListRelationFilter
  }

  export type PaymentPageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    IntiatedPayment?: IntiatedPaymentOrderByRelationAggregateInput
    PaymentPageForm?: PaymentPageFormOrderByRelationAggregateInput
  }

  export type PaymentPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentPageWhereInput | PaymentPageWhereInput[]
    OR?: PaymentPageWhereInput[]
    NOT?: PaymentPageWhereInput | PaymentPageWhereInput[]
    title?: StringFilter<"PaymentPage"> | string
    description?: StringNullableFilter<"PaymentPage"> | string | null
    logoUrl?: StringFilter<"PaymentPage"> | string
    amount?: DecimalFilter<"PaymentPage"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"PaymentPage"> | string
    expiresAt?: DateTimeNullableFilter<"PaymentPage"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentPage"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPage"> | Date | string
    status?: EnumPaymentPageStatusFilter<"PaymentPage"> | $Enums.PaymentPageStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    IntiatedPayment?: IntiatedPaymentListRelationFilter
    PaymentPageForm?: PaymentPageFormListRelationFilter
  }, "id">

  export type PaymentPageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: PaymentPageCountOrderByAggregateInput
    _avg?: PaymentPageAvgOrderByAggregateInput
    _max?: PaymentPageMaxOrderByAggregateInput
    _min?: PaymentPageMinOrderByAggregateInput
    _sum?: PaymentPageSumOrderByAggregateInput
  }

  export type PaymentPageScalarWhereWithAggregatesInput = {
    AND?: PaymentPageScalarWhereWithAggregatesInput | PaymentPageScalarWhereWithAggregatesInput[]
    OR?: PaymentPageScalarWhereWithAggregatesInput[]
    NOT?: PaymentPageScalarWhereWithAggregatesInput | PaymentPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentPage"> | string
    title?: StringWithAggregatesFilter<"PaymentPage"> | string
    description?: StringNullableWithAggregatesFilter<"PaymentPage"> | string | null
    logoUrl?: StringWithAggregatesFilter<"PaymentPage"> | string
    amount?: DecimalWithAggregatesFilter<"PaymentPage"> | Decimal | DecimalJsLike | number | string
    userId?: StringWithAggregatesFilter<"PaymentPage"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"PaymentPage"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentPage"> | Date | string
    status?: EnumPaymentPageStatusWithAggregatesFilter<"PaymentPage"> | $Enums.PaymentPageStatus
  }

  export type IntiatedPaymentWhereInput = {
    AND?: IntiatedPaymentWhereInput | IntiatedPaymentWhereInput[]
    OR?: IntiatedPaymentWhereInput[]
    NOT?: IntiatedPaymentWhereInput | IntiatedPaymentWhereInput[]
    id?: StringFilter<"IntiatedPayment"> | string
    initiatedFrom?: EnumIntiatedFromFilter<"IntiatedPayment"> | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFilter<"IntiatedPayment"> | $Enums.IntiatedPaymentStatus
    index?: IntFilter<"IntiatedPayment"> | number
    walletAddress?: StringFilter<"IntiatedPayment"> | string
    amount?: DecimalFilter<"IntiatedPayment"> | Decimal | DecimalJsLike | number | string
    paymentPageId?: StringNullableFilter<"IntiatedPayment"> | string | null
    paymentLinkId?: StringNullableFilter<"IntiatedPayment"> | string | null
    createdAt?: DateTimeFilter<"IntiatedPayment"> | Date | string
    updatedAt?: DateTimeFilter<"IntiatedPayment"> | Date | string
    paymentPage?: XOR<PaymentPageNullableScalarRelationFilter, PaymentPageWhereInput> | null
    paymentLink?: XOR<PaymentLinkNullableScalarRelationFilter, PaymentLinkWhereInput> | null
    Transaction?: TransactionListRelationFilter
  }

  export type IntiatedPaymentOrderByWithRelationInput = {
    id?: SortOrder
    initiatedFrom?: SortOrder
    status?: SortOrder
    index?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    paymentPageId?: SortOrderInput | SortOrder
    paymentLinkId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentPage?: PaymentPageOrderByWithRelationInput
    paymentLink?: PaymentLinkOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type IntiatedPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntiatedPaymentWhereInput | IntiatedPaymentWhereInput[]
    OR?: IntiatedPaymentWhereInput[]
    NOT?: IntiatedPaymentWhereInput | IntiatedPaymentWhereInput[]
    initiatedFrom?: EnumIntiatedFromFilter<"IntiatedPayment"> | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFilter<"IntiatedPayment"> | $Enums.IntiatedPaymentStatus
    index?: IntFilter<"IntiatedPayment"> | number
    walletAddress?: StringFilter<"IntiatedPayment"> | string
    amount?: DecimalFilter<"IntiatedPayment"> | Decimal | DecimalJsLike | number | string
    paymentPageId?: StringNullableFilter<"IntiatedPayment"> | string | null
    paymentLinkId?: StringNullableFilter<"IntiatedPayment"> | string | null
    createdAt?: DateTimeFilter<"IntiatedPayment"> | Date | string
    updatedAt?: DateTimeFilter<"IntiatedPayment"> | Date | string
    paymentPage?: XOR<PaymentPageNullableScalarRelationFilter, PaymentPageWhereInput> | null
    paymentLink?: XOR<PaymentLinkNullableScalarRelationFilter, PaymentLinkWhereInput> | null
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type IntiatedPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    initiatedFrom?: SortOrder
    status?: SortOrder
    index?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    paymentPageId?: SortOrderInput | SortOrder
    paymentLinkId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntiatedPaymentCountOrderByAggregateInput
    _avg?: IntiatedPaymentAvgOrderByAggregateInput
    _max?: IntiatedPaymentMaxOrderByAggregateInput
    _min?: IntiatedPaymentMinOrderByAggregateInput
    _sum?: IntiatedPaymentSumOrderByAggregateInput
  }

  export type IntiatedPaymentScalarWhereWithAggregatesInput = {
    AND?: IntiatedPaymentScalarWhereWithAggregatesInput | IntiatedPaymentScalarWhereWithAggregatesInput[]
    OR?: IntiatedPaymentScalarWhereWithAggregatesInput[]
    NOT?: IntiatedPaymentScalarWhereWithAggregatesInput | IntiatedPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntiatedPayment"> | string
    initiatedFrom?: EnumIntiatedFromWithAggregatesFilter<"IntiatedPayment"> | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusWithAggregatesFilter<"IntiatedPayment"> | $Enums.IntiatedPaymentStatus
    index?: IntWithAggregatesFilter<"IntiatedPayment"> | number
    walletAddress?: StringWithAggregatesFilter<"IntiatedPayment"> | string
    amount?: DecimalWithAggregatesFilter<"IntiatedPayment"> | Decimal | DecimalJsLike | number | string
    paymentPageId?: StringNullableWithAggregatesFilter<"IntiatedPayment"> | string | null
    paymentLinkId?: StringNullableWithAggregatesFilter<"IntiatedPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IntiatedPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IntiatedPayment"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    intiatedPaymentId?: StringFilter<"Transaction"> | string
    initiatedFrom?: EnumIntiatedFromFilter<"Transaction"> | $Enums.IntiatedFrom
    toAddress?: StringFilter<"Transaction"> | string
    fromAddress?: StringFilter<"Transaction"> | string
    settled?: BoolFilter<"Transaction"> | boolean
    settledAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    settledTo?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    intiatedPayment?: XOR<IntiatedPaymentScalarRelationFilter, IntiatedPaymentWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    intiatedPaymentId?: SortOrder
    initiatedFrom?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    settled?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    settledTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    intiatedPayment?: IntiatedPaymentOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    intiatedPaymentId?: StringFilter<"Transaction"> | string
    initiatedFrom?: EnumIntiatedFromFilter<"Transaction"> | $Enums.IntiatedFrom
    toAddress?: StringFilter<"Transaction"> | string
    fromAddress?: StringFilter<"Transaction"> | string
    settled?: BoolFilter<"Transaction"> | boolean
    settledAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    settledTo?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    intiatedPayment?: XOR<IntiatedPaymentScalarRelationFilter, IntiatedPaymentWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    intiatedPaymentId?: SortOrder
    initiatedFrom?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    settled?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    settledTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    intiatedPaymentId?: StringWithAggregatesFilter<"Transaction"> | string
    initiatedFrom?: EnumIntiatedFromWithAggregatesFilter<"Transaction"> | $Enums.IntiatedFrom
    toAddress?: StringWithAggregatesFilter<"Transaction"> | string
    fromAddress?: StringWithAggregatesFilter<"Transaction"> | string
    settled?: BoolWithAggregatesFilter<"Transaction"> | boolean
    settledAt?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
    settledTo?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PaymentButtonWhereInput = {
    AND?: PaymentButtonWhereInput | PaymentButtonWhereInput[]
    OR?: PaymentButtonWhereInput[]
    NOT?: PaymentButtonWhereInput | PaymentButtonWhereInput[]
    id?: StringFilter<"PaymentButton"> | string
    title?: StringFilter<"PaymentButton"> | string
    type?: EnumPaymentButtonTypeFilter<"PaymentButton"> | $Enums.PaymentButtonType
    description?: StringNullableFilter<"PaymentButton"> | string | null
    amount?: DecimalFilter<"PaymentButton"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PaymentButton"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentButton"> | Date | string
  }

  export type PaymentButtonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentButtonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentButtonWhereInput | PaymentButtonWhereInput[]
    OR?: PaymentButtonWhereInput[]
    NOT?: PaymentButtonWhereInput | PaymentButtonWhereInput[]
    title?: StringFilter<"PaymentButton"> | string
    type?: EnumPaymentButtonTypeFilter<"PaymentButton"> | $Enums.PaymentButtonType
    description?: StringNullableFilter<"PaymentButton"> | string | null
    amount?: DecimalFilter<"PaymentButton"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PaymentButton"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentButton"> | Date | string
  }, "id">

  export type PaymentButtonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentButtonCountOrderByAggregateInput
    _avg?: PaymentButtonAvgOrderByAggregateInput
    _max?: PaymentButtonMaxOrderByAggregateInput
    _min?: PaymentButtonMinOrderByAggregateInput
    _sum?: PaymentButtonSumOrderByAggregateInput
  }

  export type PaymentButtonScalarWhereWithAggregatesInput = {
    AND?: PaymentButtonScalarWhereWithAggregatesInput | PaymentButtonScalarWhereWithAggregatesInput[]
    OR?: PaymentButtonScalarWhereWithAggregatesInput[]
    NOT?: PaymentButtonScalarWhereWithAggregatesInput | PaymentButtonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentButton"> | string
    title?: StringWithAggregatesFilter<"PaymentButton"> | string
    type?: EnumPaymentButtonTypeWithAggregatesFilter<"PaymentButton"> | $Enums.PaymentButtonType
    description?: StringNullableWithAggregatesFilter<"PaymentButton"> | string | null
    amount?: DecimalWithAggregatesFilter<"PaymentButton"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentButton"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentButton"> | Date | string
  }

  export type PaymentPageFormWhereInput = {
    AND?: PaymentPageFormWhereInput | PaymentPageFormWhereInput[]
    OR?: PaymentPageFormWhereInput[]
    NOT?: PaymentPageFormWhereInput | PaymentPageFormWhereInput[]
    id?: StringFilter<"PaymentPageForm"> | string
    paymentPageId?: StringFilter<"PaymentPageForm"> | string
    createdAt?: DateTimeFilter<"PaymentPageForm"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPageForm"> | Date | string
    paymentPage?: XOR<PaymentPageScalarRelationFilter, PaymentPageWhereInput>
    PaymentPageFormField?: PaymentPageFormFieldListRelationFilter
  }

  export type PaymentPageFormOrderByWithRelationInput = {
    id?: SortOrder
    paymentPageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentPage?: PaymentPageOrderByWithRelationInput
    PaymentPageFormField?: PaymentPageFormFieldOrderByRelationAggregateInput
  }

  export type PaymentPageFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentPageFormWhereInput | PaymentPageFormWhereInput[]
    OR?: PaymentPageFormWhereInput[]
    NOT?: PaymentPageFormWhereInput | PaymentPageFormWhereInput[]
    paymentPageId?: StringFilter<"PaymentPageForm"> | string
    createdAt?: DateTimeFilter<"PaymentPageForm"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPageForm"> | Date | string
    paymentPage?: XOR<PaymentPageScalarRelationFilter, PaymentPageWhereInput>
    PaymentPageFormField?: PaymentPageFormFieldListRelationFilter
  }, "id">

  export type PaymentPageFormOrderByWithAggregationInput = {
    id?: SortOrder
    paymentPageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentPageFormCountOrderByAggregateInput
    _max?: PaymentPageFormMaxOrderByAggregateInput
    _min?: PaymentPageFormMinOrderByAggregateInput
  }

  export type PaymentPageFormScalarWhereWithAggregatesInput = {
    AND?: PaymentPageFormScalarWhereWithAggregatesInput | PaymentPageFormScalarWhereWithAggregatesInput[]
    OR?: PaymentPageFormScalarWhereWithAggregatesInput[]
    NOT?: PaymentPageFormScalarWhereWithAggregatesInput | PaymentPageFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentPageForm"> | string
    paymentPageId?: StringWithAggregatesFilter<"PaymentPageForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentPageForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentPageForm"> | Date | string
  }

  export type PaymentPageFormFieldWhereInput = {
    AND?: PaymentPageFormFieldWhereInput | PaymentPageFormFieldWhereInput[]
    OR?: PaymentPageFormFieldWhereInput[]
    NOT?: PaymentPageFormFieldWhereInput | PaymentPageFormFieldWhereInput[]
    id?: StringFilter<"PaymentPageFormField"> | string
    type?: EnumPaymentPageFormFieldTypeFilter<"PaymentPageFormField"> | $Enums.PaymentPageFormFieldType
    label?: StringFilter<"PaymentPageFormField"> | string
    placeholder?: StringNullableFilter<"PaymentPageFormField"> | string | null
    required?: BoolFilter<"PaymentPageFormField"> | boolean
    value?: StringNullableFilter<"PaymentPageFormField"> | string | null
    paymentPageFormId?: StringFilter<"PaymentPageFormField"> | string
    createdAt?: DateTimeFilter<"PaymentPageFormField"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPageFormField"> | Date | string
    paymentPageForm?: XOR<PaymentPageFormScalarRelationFilter, PaymentPageFormWhereInput>
  }

  export type PaymentPageFormFieldOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    value?: SortOrderInput | SortOrder
    paymentPageFormId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentPageForm?: PaymentPageFormOrderByWithRelationInput
  }

  export type PaymentPageFormFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentPageFormFieldWhereInput | PaymentPageFormFieldWhereInput[]
    OR?: PaymentPageFormFieldWhereInput[]
    NOT?: PaymentPageFormFieldWhereInput | PaymentPageFormFieldWhereInput[]
    type?: EnumPaymentPageFormFieldTypeFilter<"PaymentPageFormField"> | $Enums.PaymentPageFormFieldType
    label?: StringFilter<"PaymentPageFormField"> | string
    placeholder?: StringNullableFilter<"PaymentPageFormField"> | string | null
    required?: BoolFilter<"PaymentPageFormField"> | boolean
    value?: StringNullableFilter<"PaymentPageFormField"> | string | null
    paymentPageFormId?: StringFilter<"PaymentPageFormField"> | string
    createdAt?: DateTimeFilter<"PaymentPageFormField"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPageFormField"> | Date | string
    paymentPageForm?: XOR<PaymentPageFormScalarRelationFilter, PaymentPageFormWhereInput>
  }, "id">

  export type PaymentPageFormFieldOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    value?: SortOrderInput | SortOrder
    paymentPageFormId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentPageFormFieldCountOrderByAggregateInput
    _max?: PaymentPageFormFieldMaxOrderByAggregateInput
    _min?: PaymentPageFormFieldMinOrderByAggregateInput
  }

  export type PaymentPageFormFieldScalarWhereWithAggregatesInput = {
    AND?: PaymentPageFormFieldScalarWhereWithAggregatesInput | PaymentPageFormFieldScalarWhereWithAggregatesInput[]
    OR?: PaymentPageFormFieldScalarWhereWithAggregatesInput[]
    NOT?: PaymentPageFormFieldScalarWhereWithAggregatesInput | PaymentPageFormFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentPageFormField"> | string
    type?: EnumPaymentPageFormFieldTypeWithAggregatesFilter<"PaymentPageFormField"> | $Enums.PaymentPageFormFieldType
    label?: StringWithAggregatesFilter<"PaymentPageFormField"> | string
    placeholder?: StringNullableWithAggregatesFilter<"PaymentPageFormField"> | string | null
    required?: BoolWithAggregatesFilter<"PaymentPageFormField"> | boolean
    value?: StringNullableWithAggregatesFilter<"PaymentPageFormField"> | string | null
    paymentPageFormId?: StringWithAggregatesFilter<"PaymentPageFormField"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentPageFormField"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentPageFormField"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkCreateNestedManyWithoutUserInput
    Wallet?: WalletCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkUncheckedCreateNestedManyWithoutUserInput
    Wallet?: WalletUncheckedCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUpdateManyWithoutUserNestedInput
    Wallet?: WalletUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUncheckedUpdateManyWithoutUserNestedInput
    Wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorCreateInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
    user: UserCreateNestedOneWithoutAuthenticatorInput
  }

  export type AuthenticatorUncheckedCreateInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAuthenticatorNestedInput
  }

  export type AuthenticatorUncheckedUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorCreateManyInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateManyMutationInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WalletCreateInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
    stableCoin: StableCoinCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    userId: string
    stableCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
    stableCoin?: StableCoinUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    stableCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateManyInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    userId: string
    stableCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    stableCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableCoinCreateInput = {
    id?: string
    name: string
    symbol: string
    logoUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Wallet?: WalletCreateNestedManyWithoutStableCoinInput
  }

  export type StableCoinUncheckedCreateInput = {
    id?: string
    name: string
    symbol: string
    logoUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Wallet?: WalletUncheckedCreateNestedManyWithoutStableCoinInput
  }

  export type StableCoinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Wallet?: WalletUpdateManyWithoutStableCoinNestedInput
  }

  export type StableCoinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Wallet?: WalletUncheckedUpdateManyWithoutStableCoinNestedInput
  }

  export type StableCoinCreateManyInput = {
    id?: string
    name: string
    symbol: string
    logoUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StableCoinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableCoinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLinkCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentLinkStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    description?: string | null
    user: UserCreateNestedOneWithoutPaymentLinkInput
    IntiatedPayment?: IntiatedPaymentCreateNestedManyWithoutPaymentLinkInput
  }

  export type PaymentLinkUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentLinkStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    description?: string | null
    userId: string
    IntiatedPayment?: IntiatedPaymentUncheckedCreateNestedManyWithoutPaymentLinkInput
  }

  export type PaymentLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentLinkNestedInput
    IntiatedPayment?: IntiatedPaymentUpdateManyWithoutPaymentLinkNestedInput
  }

  export type PaymentLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    IntiatedPayment?: IntiatedPaymentUncheckedUpdateManyWithoutPaymentLinkNestedInput
  }

  export type PaymentLinkCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentLinkStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    description?: string | null
    userId: string
  }

  export type PaymentLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentPageCreateInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
    user: UserCreateNestedOneWithoutPaymentPageInput
    IntiatedPayment?: IntiatedPaymentCreateNestedManyWithoutPaymentPageInput
    PaymentPageForm?: PaymentPageFormCreateNestedManyWithoutPaymentPageInput
  }

  export type PaymentPageUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
    IntiatedPayment?: IntiatedPaymentUncheckedCreateNestedManyWithoutPaymentPageInput
    PaymentPageForm?: PaymentPageFormUncheckedCreateNestedManyWithoutPaymentPageInput
  }

  export type PaymentPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
    user?: UserUpdateOneRequiredWithoutPaymentPageNestedInput
    IntiatedPayment?: IntiatedPaymentUpdateManyWithoutPaymentPageNestedInput
    PaymentPageForm?: PaymentPageFormUpdateManyWithoutPaymentPageNestedInput
  }

  export type PaymentPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
    IntiatedPayment?: IntiatedPaymentUncheckedUpdateManyWithoutPaymentPageNestedInput
    PaymentPageForm?: PaymentPageFormUncheckedUpdateManyWithoutPaymentPageNestedInput
  }

  export type PaymentPageCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
  }

  export type PaymentPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
  }

  export type PaymentPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
  }

  export type IntiatedPaymentCreateInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPage?: PaymentPageCreateNestedOneWithoutIntiatedPaymentInput
    paymentLink?: PaymentLinkCreateNestedOneWithoutIntiatedPaymentInput
    Transaction?: TransactionCreateNestedManyWithoutIntiatedPaymentInput
  }

  export type IntiatedPaymentUncheckedCreateInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    paymentPageId?: string | null
    paymentLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutIntiatedPaymentInput
  }

  export type IntiatedPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPage?: PaymentPageUpdateOneWithoutIntiatedPaymentNestedInput
    paymentLink?: PaymentLinkUpdateOneWithoutIntiatedPaymentNestedInput
    Transaction?: TransactionUpdateManyWithoutIntiatedPaymentNestedInput
  }

  export type IntiatedPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentPageId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutIntiatedPaymentNestedInput
  }

  export type IntiatedPaymentCreateManyInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    paymentPageId?: string | null
    paymentLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntiatedPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntiatedPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentPageId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    status: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    initiatedFrom: $Enums.IntiatedFrom
    toAddress: string
    fromAddress: string
    settled: boolean
    settledAt?: Date | string | null
    settledTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    intiatedPayment: IntiatedPaymentCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    status: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    intiatedPaymentId: string
    initiatedFrom: $Enums.IntiatedFrom
    toAddress: string
    fromAddress: string
    settled: boolean
    settledAt?: Date | string | null
    settledTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    settled?: BoolFieldUpdateOperationsInput | boolean
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intiatedPayment?: IntiatedPaymentUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intiatedPaymentId?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    settled?: BoolFieldUpdateOperationsInput | boolean
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    status: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    intiatedPaymentId: string
    initiatedFrom: $Enums.IntiatedFrom
    toAddress: string
    fromAddress: string
    settled: boolean
    settledAt?: Date | string | null
    settledTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    settled?: BoolFieldUpdateOperationsInput | boolean
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intiatedPaymentId?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    settled?: BoolFieldUpdateOperationsInput | boolean
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentButtonCreateInput = {
    id?: string
    title: string
    type: $Enums.PaymentButtonType
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentButtonUncheckedCreateInput = {
    id?: string
    title: string
    type: $Enums.PaymentButtonType
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentButtonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentButtonTypeFieldUpdateOperationsInput | $Enums.PaymentButtonType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentButtonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentButtonTypeFieldUpdateOperationsInput | $Enums.PaymentButtonType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentButtonCreateManyInput = {
    id?: string
    title: string
    type: $Enums.PaymentButtonType
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentButtonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentButtonTypeFieldUpdateOperationsInput | $Enums.PaymentButtonType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentButtonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentButtonTypeFieldUpdateOperationsInput | $Enums.PaymentButtonType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageFormCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPage: PaymentPageCreateNestedOneWithoutPaymentPageFormInput
    PaymentPageFormField?: PaymentPageFormFieldCreateNestedManyWithoutPaymentPageFormInput
  }

  export type PaymentPageFormUncheckedCreateInput = {
    id?: string
    paymentPageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PaymentPageFormField?: PaymentPageFormFieldUncheckedCreateNestedManyWithoutPaymentPageFormInput
  }

  export type PaymentPageFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPage?: PaymentPageUpdateOneRequiredWithoutPaymentPageFormNestedInput
    PaymentPageFormField?: PaymentPageFormFieldUpdateManyWithoutPaymentPageFormNestedInput
  }

  export type PaymentPageFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentPageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentPageFormField?: PaymentPageFormFieldUncheckedUpdateManyWithoutPaymentPageFormNestedInput
  }

  export type PaymentPageFormCreateManyInput = {
    id?: string
    paymentPageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPageFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentPageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageFormFieldCreateInput = {
    id?: string
    type: $Enums.PaymentPageFormFieldType
    label: string
    placeholder?: string | null
    required?: boolean
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPageForm: PaymentPageFormCreateNestedOneWithoutPaymentPageFormFieldInput
  }

  export type PaymentPageFormFieldUncheckedCreateInput = {
    id?: string
    type: $Enums.PaymentPageFormFieldType
    label: string
    placeholder?: string | null
    required?: boolean
    value?: string | null
    paymentPageFormId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPageFormFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentPageFormFieldTypeFieldUpdateOperationsInput | $Enums.PaymentPageFormFieldType
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPageForm?: PaymentPageFormUpdateOneRequiredWithoutPaymentPageFormFieldNestedInput
  }

  export type PaymentPageFormFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentPageFormFieldTypeFieldUpdateOperationsInput | $Enums.PaymentPageFormFieldType
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    value?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPageFormId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageFormFieldCreateManyInput = {
    id?: string
    type: $Enums.PaymentPageFormFieldType
    label: string
    placeholder?: string | null
    required?: boolean
    value?: string | null
    paymentPageFormId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPageFormFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentPageFormFieldTypeFieldUpdateOperationsInput | $Enums.PaymentPageFormFieldType
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageFormFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentPageFormFieldTypeFieldUpdateOperationsInput | $Enums.PaymentPageFormFieldType
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    value?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPageFormId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AuthenticatorListRelationFilter = {
    every?: AuthenticatorWhereInput
    some?: AuthenticatorWhereInput
    none?: AuthenticatorWhereInput
  }

  export type PaymentLinkListRelationFilter = {
    every?: PaymentLinkWhereInput
    some?: PaymentLinkWhereInput
    none?: PaymentLinkWhereInput
  }

  export type WalletListRelationFilter = {
    every?: WalletWhereInput
    some?: WalletWhereInput
    none?: WalletWhereInput
  }

  export type PaymentPageListRelationFilter = {
    every?: PaymentPageWhereInput
    some?: PaymentPageWhereInput
    none?: PaymentPageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthenticatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentPageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuthenticatorUserIdCredentialIDCompoundUniqueInput = {
    userId: string
    credentialID: string
  }

  export type AuthenticatorCountOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type AuthenticatorMaxOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorMinOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StableCoinScalarRelationFilter = {
    is?: StableCoinWhereInput
    isNot?: StableCoinWhereInput
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    stableCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    stableCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    stableCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StableCoinCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    logoUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StableCoinMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    logoUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StableCoinMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    logoUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPaymentLinkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentLinkStatus | EnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentLinkStatus[] | ListEnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentLinkStatus[] | ListEnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentLinkStatusFilter<$PrismaModel> | $Enums.PaymentLinkStatus
  }

  export type IntiatedPaymentListRelationFilter = {
    every?: IntiatedPaymentWhereInput
    some?: IntiatedPaymentWhereInput
    none?: IntiatedPaymentWhereInput
  }

  export type IntiatedPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentLinkCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type PaymentLinkAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type PaymentLinkMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type PaymentLinkSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentLinkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentLinkStatus | EnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentLinkStatus[] | ListEnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentLinkStatus[] | ListEnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentLinkStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentLinkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentLinkStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentLinkStatusFilter<$PrismaModel>
  }

  export type EnumPaymentPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPageStatus | EnumPaymentPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPageStatus[] | ListEnumPaymentPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPageStatus[] | ListEnumPaymentPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPageStatusFilter<$PrismaModel> | $Enums.PaymentPageStatus
  }

  export type PaymentPageFormListRelationFilter = {
    every?: PaymentPageFormWhereInput
    some?: PaymentPageFormWhereInput
    none?: PaymentPageFormWhereInput
  }

  export type PaymentPageFormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentPageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type PaymentPageAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentPageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type PaymentPageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type PaymentPageSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPageStatus | EnumPaymentPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPageStatus[] | ListEnumPaymentPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPageStatus[] | ListEnumPaymentPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentPageStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentPageStatusFilter<$PrismaModel>
  }

  export type EnumIntiatedFromFilter<$PrismaModel = never> = {
    equals?: $Enums.IntiatedFrom | EnumIntiatedFromFieldRefInput<$PrismaModel>
    in?: $Enums.IntiatedFrom[] | ListEnumIntiatedFromFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntiatedFrom[] | ListEnumIntiatedFromFieldRefInput<$PrismaModel>
    not?: NestedEnumIntiatedFromFilter<$PrismaModel> | $Enums.IntiatedFrom
  }

  export type EnumIntiatedPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntiatedPaymentStatus | EnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntiatedPaymentStatus[] | ListEnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntiatedPaymentStatus[] | ListEnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntiatedPaymentStatusFilter<$PrismaModel> | $Enums.IntiatedPaymentStatus
  }

  export type PaymentPageNullableScalarRelationFilter = {
    is?: PaymentPageWhereInput | null
    isNot?: PaymentPageWhereInput | null
  }

  export type PaymentLinkNullableScalarRelationFilter = {
    is?: PaymentLinkWhereInput | null
    isNot?: PaymentLinkWhereInput | null
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntiatedPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    initiatedFrom?: SortOrder
    status?: SortOrder
    index?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    paymentPageId?: SortOrder
    paymentLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntiatedPaymentAvgOrderByAggregateInput = {
    index?: SortOrder
    amount?: SortOrder
  }

  export type IntiatedPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    initiatedFrom?: SortOrder
    status?: SortOrder
    index?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    paymentPageId?: SortOrder
    paymentLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntiatedPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    initiatedFrom?: SortOrder
    status?: SortOrder
    index?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    paymentPageId?: SortOrder
    paymentLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntiatedPaymentSumOrderByAggregateInput = {
    index?: SortOrder
    amount?: SortOrder
  }

  export type EnumIntiatedFromWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntiatedFrom | EnumIntiatedFromFieldRefInput<$PrismaModel>
    in?: $Enums.IntiatedFrom[] | ListEnumIntiatedFromFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntiatedFrom[] | ListEnumIntiatedFromFieldRefInput<$PrismaModel>
    not?: NestedEnumIntiatedFromWithAggregatesFilter<$PrismaModel> | $Enums.IntiatedFrom
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntiatedFromFilter<$PrismaModel>
    _max?: NestedEnumIntiatedFromFilter<$PrismaModel>
  }

  export type EnumIntiatedPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntiatedPaymentStatus | EnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntiatedPaymentStatus[] | ListEnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntiatedPaymentStatus[] | ListEnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntiatedPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IntiatedPaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntiatedPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumIntiatedPaymentStatusFilter<$PrismaModel>
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type IntiatedPaymentScalarRelationFilter = {
    is?: IntiatedPaymentWhereInput
    isNot?: IntiatedPaymentWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    intiatedPaymentId?: SortOrder
    initiatedFrom?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    settled?: SortOrder
    settledAt?: SortOrder
    settledTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    intiatedPaymentId?: SortOrder
    initiatedFrom?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    settled?: SortOrder
    settledAt?: SortOrder
    settledTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    intiatedPaymentId?: SortOrder
    initiatedFrom?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    settled?: SortOrder
    settledAt?: SortOrder
    settledTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumPaymentButtonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentButtonType | EnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentButtonType[] | ListEnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentButtonType[] | ListEnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentButtonTypeFilter<$PrismaModel> | $Enums.PaymentButtonType
  }

  export type PaymentButtonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentButtonAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentButtonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentButtonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentButtonSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentButtonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentButtonType | EnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentButtonType[] | ListEnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentButtonType[] | ListEnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentButtonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentButtonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentButtonTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentButtonTypeFilter<$PrismaModel>
  }

  export type PaymentPageScalarRelationFilter = {
    is?: PaymentPageWhereInput
    isNot?: PaymentPageWhereInput
  }

  export type PaymentPageFormFieldListRelationFilter = {
    every?: PaymentPageFormFieldWhereInput
    some?: PaymentPageFormFieldWhereInput
    none?: PaymentPageFormFieldWhereInput
  }

  export type PaymentPageFormFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentPageFormCountOrderByAggregateInput = {
    id?: SortOrder
    paymentPageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPageFormMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentPageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPageFormMinOrderByAggregateInput = {
    id?: SortOrder
    paymentPageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPaymentPageFormFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPageFormFieldType | EnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPageFormFieldType[] | ListEnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPageFormFieldType[] | ListEnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPageFormFieldTypeFilter<$PrismaModel> | $Enums.PaymentPageFormFieldType
  }

  export type PaymentPageFormScalarRelationFilter = {
    is?: PaymentPageFormWhereInput
    isNot?: PaymentPageFormWhereInput
  }

  export type PaymentPageFormFieldCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    value?: SortOrder
    paymentPageFormId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPageFormFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    value?: SortOrder
    paymentPageFormId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPageFormFieldMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    value?: SortOrder
    paymentPageFormId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPaymentPageFormFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPageFormFieldType | EnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPageFormFieldType[] | ListEnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPageFormFieldType[] | ListEnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPageFormFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPageFormFieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentPageFormFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentPageFormFieldTypeFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type PaymentLinkCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentLinkCreateWithoutUserInput, PaymentLinkUncheckedCreateWithoutUserInput> | PaymentLinkCreateWithoutUserInput[] | PaymentLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutUserInput | PaymentLinkCreateOrConnectWithoutUserInput[]
    createMany?: PaymentLinkCreateManyUserInputEnvelope
    connect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
  }

  export type WalletCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type PaymentPageCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentPageCreateWithoutUserInput, PaymentPageUncheckedCreateWithoutUserInput> | PaymentPageCreateWithoutUserInput[] | PaymentPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentPageCreateOrConnectWithoutUserInput | PaymentPageCreateOrConnectWithoutUserInput[]
    createMany?: PaymentPageCreateManyUserInputEnvelope
    connect?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type PaymentLinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentLinkCreateWithoutUserInput, PaymentLinkUncheckedCreateWithoutUserInput> | PaymentLinkCreateWithoutUserInput[] | PaymentLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutUserInput | PaymentLinkCreateOrConnectWithoutUserInput[]
    createMany?: PaymentLinkCreateManyUserInputEnvelope
    connect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type PaymentPageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentPageCreateWithoutUserInput, PaymentPageUncheckedCreateWithoutUserInput> | PaymentPageCreateWithoutUserInput[] | PaymentPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentPageCreateOrConnectWithoutUserInput | PaymentPageCreateOrConnectWithoutUserInput[]
    createMany?: PaymentPageCreateManyUserInputEnvelope
    connect?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type PaymentLinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentLinkCreateWithoutUserInput, PaymentLinkUncheckedCreateWithoutUserInput> | PaymentLinkCreateWithoutUserInput[] | PaymentLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutUserInput | PaymentLinkCreateOrConnectWithoutUserInput[]
    upsert?: PaymentLinkUpsertWithWhereUniqueWithoutUserInput | PaymentLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentLinkCreateManyUserInputEnvelope
    set?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    disconnect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    delete?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    connect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    update?: PaymentLinkUpdateWithWhereUniqueWithoutUserInput | PaymentLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentLinkUpdateManyWithWhereWithoutUserInput | PaymentLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentLinkScalarWhereInput | PaymentLinkScalarWhereInput[]
  }

  export type WalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type PaymentPageUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentPageCreateWithoutUserInput, PaymentPageUncheckedCreateWithoutUserInput> | PaymentPageCreateWithoutUserInput[] | PaymentPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentPageCreateOrConnectWithoutUserInput | PaymentPageCreateOrConnectWithoutUserInput[]
    upsert?: PaymentPageUpsertWithWhereUniqueWithoutUserInput | PaymentPageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentPageCreateManyUserInputEnvelope
    set?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
    disconnect?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
    delete?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
    connect?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
    update?: PaymentPageUpdateWithWhereUniqueWithoutUserInput | PaymentPageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentPageUpdateManyWithWhereWithoutUserInput | PaymentPageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentPageScalarWhereInput | PaymentPageScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type PaymentLinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentLinkCreateWithoutUserInput, PaymentLinkUncheckedCreateWithoutUserInput> | PaymentLinkCreateWithoutUserInput[] | PaymentLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutUserInput | PaymentLinkCreateOrConnectWithoutUserInput[]
    upsert?: PaymentLinkUpsertWithWhereUniqueWithoutUserInput | PaymentLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentLinkCreateManyUserInputEnvelope
    set?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    disconnect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    delete?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    connect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    update?: PaymentLinkUpdateWithWhereUniqueWithoutUserInput | PaymentLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentLinkUpdateManyWithWhereWithoutUserInput | PaymentLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentLinkScalarWhereInput | PaymentLinkScalarWhereInput[]
  }

  export type WalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type PaymentPageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentPageCreateWithoutUserInput, PaymentPageUncheckedCreateWithoutUserInput> | PaymentPageCreateWithoutUserInput[] | PaymentPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentPageCreateOrConnectWithoutUserInput | PaymentPageCreateOrConnectWithoutUserInput[]
    upsert?: PaymentPageUpsertWithWhereUniqueWithoutUserInput | PaymentPageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentPageCreateManyUserInputEnvelope
    set?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
    disconnect?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
    delete?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
    connect?: PaymentPageWhereUniqueInput | PaymentPageWhereUniqueInput[]
    update?: PaymentPageUpdateWithWhereUniqueWithoutUserInput | PaymentPageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentPageUpdateManyWithWhereWithoutUserInput | PaymentPageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentPageScalarWhereInput | PaymentPageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAuthenticatorInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAuthenticatorNestedInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    upsert?: UserUpsertWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthenticatorInput, UserUpdateWithoutAuthenticatorInput>, UserUncheckedUpdateWithoutAuthenticatorInput>
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type StableCoinCreateNestedOneWithoutWalletInput = {
    create?: XOR<StableCoinCreateWithoutWalletInput, StableCoinUncheckedCreateWithoutWalletInput>
    connectOrCreate?: StableCoinCreateOrConnectWithoutWalletInput
    connect?: StableCoinWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type StableCoinUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<StableCoinCreateWithoutWalletInput, StableCoinUncheckedCreateWithoutWalletInput>
    connectOrCreate?: StableCoinCreateOrConnectWithoutWalletInput
    upsert?: StableCoinUpsertWithoutWalletInput
    connect?: StableCoinWhereUniqueInput
    update?: XOR<XOR<StableCoinUpdateToOneWithWhereWithoutWalletInput, StableCoinUpdateWithoutWalletInput>, StableCoinUncheckedUpdateWithoutWalletInput>
  }

  export type WalletCreateNestedManyWithoutStableCoinInput = {
    create?: XOR<WalletCreateWithoutStableCoinInput, WalletUncheckedCreateWithoutStableCoinInput> | WalletCreateWithoutStableCoinInput[] | WalletUncheckedCreateWithoutStableCoinInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutStableCoinInput | WalletCreateOrConnectWithoutStableCoinInput[]
    createMany?: WalletCreateManyStableCoinInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedManyWithoutStableCoinInput = {
    create?: XOR<WalletCreateWithoutStableCoinInput, WalletUncheckedCreateWithoutStableCoinInput> | WalletCreateWithoutStableCoinInput[] | WalletUncheckedCreateWithoutStableCoinInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutStableCoinInput | WalletCreateOrConnectWithoutStableCoinInput[]
    createMany?: WalletCreateManyStableCoinInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type WalletUpdateManyWithoutStableCoinNestedInput = {
    create?: XOR<WalletCreateWithoutStableCoinInput, WalletUncheckedCreateWithoutStableCoinInput> | WalletCreateWithoutStableCoinInput[] | WalletUncheckedCreateWithoutStableCoinInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutStableCoinInput | WalletCreateOrConnectWithoutStableCoinInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutStableCoinInput | WalletUpsertWithWhereUniqueWithoutStableCoinInput[]
    createMany?: WalletCreateManyStableCoinInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutStableCoinInput | WalletUpdateWithWhereUniqueWithoutStableCoinInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutStableCoinInput | WalletUpdateManyWithWhereWithoutStableCoinInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type WalletUncheckedUpdateManyWithoutStableCoinNestedInput = {
    create?: XOR<WalletCreateWithoutStableCoinInput, WalletUncheckedCreateWithoutStableCoinInput> | WalletCreateWithoutStableCoinInput[] | WalletUncheckedCreateWithoutStableCoinInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutStableCoinInput | WalletCreateOrConnectWithoutStableCoinInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutStableCoinInput | WalletUpsertWithWhereUniqueWithoutStableCoinInput[]
    createMany?: WalletCreateManyStableCoinInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutStableCoinInput | WalletUpdateWithWhereUniqueWithoutStableCoinInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutStableCoinInput | WalletUpdateManyWithWhereWithoutStableCoinInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentLinkInput = {
    create?: XOR<UserCreateWithoutPaymentLinkInput, UserUncheckedCreateWithoutPaymentLinkInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentLinkInput
    connect?: UserWhereUniqueInput
  }

  export type IntiatedPaymentCreateNestedManyWithoutPaymentLinkInput = {
    create?: XOR<IntiatedPaymentCreateWithoutPaymentLinkInput, IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput> | IntiatedPaymentCreateWithoutPaymentLinkInput[] | IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput[]
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutPaymentLinkInput | IntiatedPaymentCreateOrConnectWithoutPaymentLinkInput[]
    createMany?: IntiatedPaymentCreateManyPaymentLinkInputEnvelope
    connect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
  }

  export type IntiatedPaymentUncheckedCreateNestedManyWithoutPaymentLinkInput = {
    create?: XOR<IntiatedPaymentCreateWithoutPaymentLinkInput, IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput> | IntiatedPaymentCreateWithoutPaymentLinkInput[] | IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput[]
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutPaymentLinkInput | IntiatedPaymentCreateOrConnectWithoutPaymentLinkInput[]
    createMany?: IntiatedPaymentCreateManyPaymentLinkInputEnvelope
    connect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
  }

  export type EnumPaymentLinkStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentLinkStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentLinkNestedInput = {
    create?: XOR<UserCreateWithoutPaymentLinkInput, UserUncheckedCreateWithoutPaymentLinkInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentLinkInput
    upsert?: UserUpsertWithoutPaymentLinkInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentLinkInput, UserUpdateWithoutPaymentLinkInput>, UserUncheckedUpdateWithoutPaymentLinkInput>
  }

  export type IntiatedPaymentUpdateManyWithoutPaymentLinkNestedInput = {
    create?: XOR<IntiatedPaymentCreateWithoutPaymentLinkInput, IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput> | IntiatedPaymentCreateWithoutPaymentLinkInput[] | IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput[]
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutPaymentLinkInput | IntiatedPaymentCreateOrConnectWithoutPaymentLinkInput[]
    upsert?: IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentLinkInput | IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentLinkInput[]
    createMany?: IntiatedPaymentCreateManyPaymentLinkInputEnvelope
    set?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    disconnect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    delete?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    connect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    update?: IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentLinkInput | IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentLinkInput[]
    updateMany?: IntiatedPaymentUpdateManyWithWhereWithoutPaymentLinkInput | IntiatedPaymentUpdateManyWithWhereWithoutPaymentLinkInput[]
    deleteMany?: IntiatedPaymentScalarWhereInput | IntiatedPaymentScalarWhereInput[]
  }

  export type IntiatedPaymentUncheckedUpdateManyWithoutPaymentLinkNestedInput = {
    create?: XOR<IntiatedPaymentCreateWithoutPaymentLinkInput, IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput> | IntiatedPaymentCreateWithoutPaymentLinkInput[] | IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput[]
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutPaymentLinkInput | IntiatedPaymentCreateOrConnectWithoutPaymentLinkInput[]
    upsert?: IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentLinkInput | IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentLinkInput[]
    createMany?: IntiatedPaymentCreateManyPaymentLinkInputEnvelope
    set?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    disconnect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    delete?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    connect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    update?: IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentLinkInput | IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentLinkInput[]
    updateMany?: IntiatedPaymentUpdateManyWithWhereWithoutPaymentLinkInput | IntiatedPaymentUpdateManyWithWhereWithoutPaymentLinkInput[]
    deleteMany?: IntiatedPaymentScalarWhereInput | IntiatedPaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentPageInput = {
    create?: XOR<UserCreateWithoutPaymentPageInput, UserUncheckedCreateWithoutPaymentPageInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentPageInput
    connect?: UserWhereUniqueInput
  }

  export type IntiatedPaymentCreateNestedManyWithoutPaymentPageInput = {
    create?: XOR<IntiatedPaymentCreateWithoutPaymentPageInput, IntiatedPaymentUncheckedCreateWithoutPaymentPageInput> | IntiatedPaymentCreateWithoutPaymentPageInput[] | IntiatedPaymentUncheckedCreateWithoutPaymentPageInput[]
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutPaymentPageInput | IntiatedPaymentCreateOrConnectWithoutPaymentPageInput[]
    createMany?: IntiatedPaymentCreateManyPaymentPageInputEnvelope
    connect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
  }

  export type PaymentPageFormCreateNestedManyWithoutPaymentPageInput = {
    create?: XOR<PaymentPageFormCreateWithoutPaymentPageInput, PaymentPageFormUncheckedCreateWithoutPaymentPageInput> | PaymentPageFormCreateWithoutPaymentPageInput[] | PaymentPageFormUncheckedCreateWithoutPaymentPageInput[]
    connectOrCreate?: PaymentPageFormCreateOrConnectWithoutPaymentPageInput | PaymentPageFormCreateOrConnectWithoutPaymentPageInput[]
    createMany?: PaymentPageFormCreateManyPaymentPageInputEnvelope
    connect?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
  }

  export type IntiatedPaymentUncheckedCreateNestedManyWithoutPaymentPageInput = {
    create?: XOR<IntiatedPaymentCreateWithoutPaymentPageInput, IntiatedPaymentUncheckedCreateWithoutPaymentPageInput> | IntiatedPaymentCreateWithoutPaymentPageInput[] | IntiatedPaymentUncheckedCreateWithoutPaymentPageInput[]
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutPaymentPageInput | IntiatedPaymentCreateOrConnectWithoutPaymentPageInput[]
    createMany?: IntiatedPaymentCreateManyPaymentPageInputEnvelope
    connect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
  }

  export type PaymentPageFormUncheckedCreateNestedManyWithoutPaymentPageInput = {
    create?: XOR<PaymentPageFormCreateWithoutPaymentPageInput, PaymentPageFormUncheckedCreateWithoutPaymentPageInput> | PaymentPageFormCreateWithoutPaymentPageInput[] | PaymentPageFormUncheckedCreateWithoutPaymentPageInput[]
    connectOrCreate?: PaymentPageFormCreateOrConnectWithoutPaymentPageInput | PaymentPageFormCreateOrConnectWithoutPaymentPageInput[]
    createMany?: PaymentPageFormCreateManyPaymentPageInputEnvelope
    connect?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
  }

  export type EnumPaymentPageStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentPageStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentPageNestedInput = {
    create?: XOR<UserCreateWithoutPaymentPageInput, UserUncheckedCreateWithoutPaymentPageInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentPageInput
    upsert?: UserUpsertWithoutPaymentPageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentPageInput, UserUpdateWithoutPaymentPageInput>, UserUncheckedUpdateWithoutPaymentPageInput>
  }

  export type IntiatedPaymentUpdateManyWithoutPaymentPageNestedInput = {
    create?: XOR<IntiatedPaymentCreateWithoutPaymentPageInput, IntiatedPaymentUncheckedCreateWithoutPaymentPageInput> | IntiatedPaymentCreateWithoutPaymentPageInput[] | IntiatedPaymentUncheckedCreateWithoutPaymentPageInput[]
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutPaymentPageInput | IntiatedPaymentCreateOrConnectWithoutPaymentPageInput[]
    upsert?: IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentPageInput | IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentPageInput[]
    createMany?: IntiatedPaymentCreateManyPaymentPageInputEnvelope
    set?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    disconnect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    delete?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    connect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    update?: IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentPageInput | IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentPageInput[]
    updateMany?: IntiatedPaymentUpdateManyWithWhereWithoutPaymentPageInput | IntiatedPaymentUpdateManyWithWhereWithoutPaymentPageInput[]
    deleteMany?: IntiatedPaymentScalarWhereInput | IntiatedPaymentScalarWhereInput[]
  }

  export type PaymentPageFormUpdateManyWithoutPaymentPageNestedInput = {
    create?: XOR<PaymentPageFormCreateWithoutPaymentPageInput, PaymentPageFormUncheckedCreateWithoutPaymentPageInput> | PaymentPageFormCreateWithoutPaymentPageInput[] | PaymentPageFormUncheckedCreateWithoutPaymentPageInput[]
    connectOrCreate?: PaymentPageFormCreateOrConnectWithoutPaymentPageInput | PaymentPageFormCreateOrConnectWithoutPaymentPageInput[]
    upsert?: PaymentPageFormUpsertWithWhereUniqueWithoutPaymentPageInput | PaymentPageFormUpsertWithWhereUniqueWithoutPaymentPageInput[]
    createMany?: PaymentPageFormCreateManyPaymentPageInputEnvelope
    set?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
    disconnect?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
    delete?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
    connect?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
    update?: PaymentPageFormUpdateWithWhereUniqueWithoutPaymentPageInput | PaymentPageFormUpdateWithWhereUniqueWithoutPaymentPageInput[]
    updateMany?: PaymentPageFormUpdateManyWithWhereWithoutPaymentPageInput | PaymentPageFormUpdateManyWithWhereWithoutPaymentPageInput[]
    deleteMany?: PaymentPageFormScalarWhereInput | PaymentPageFormScalarWhereInput[]
  }

  export type IntiatedPaymentUncheckedUpdateManyWithoutPaymentPageNestedInput = {
    create?: XOR<IntiatedPaymentCreateWithoutPaymentPageInput, IntiatedPaymentUncheckedCreateWithoutPaymentPageInput> | IntiatedPaymentCreateWithoutPaymentPageInput[] | IntiatedPaymentUncheckedCreateWithoutPaymentPageInput[]
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutPaymentPageInput | IntiatedPaymentCreateOrConnectWithoutPaymentPageInput[]
    upsert?: IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentPageInput | IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentPageInput[]
    createMany?: IntiatedPaymentCreateManyPaymentPageInputEnvelope
    set?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    disconnect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    delete?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    connect?: IntiatedPaymentWhereUniqueInput | IntiatedPaymentWhereUniqueInput[]
    update?: IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentPageInput | IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentPageInput[]
    updateMany?: IntiatedPaymentUpdateManyWithWhereWithoutPaymentPageInput | IntiatedPaymentUpdateManyWithWhereWithoutPaymentPageInput[]
    deleteMany?: IntiatedPaymentScalarWhereInput | IntiatedPaymentScalarWhereInput[]
  }

  export type PaymentPageFormUncheckedUpdateManyWithoutPaymentPageNestedInput = {
    create?: XOR<PaymentPageFormCreateWithoutPaymentPageInput, PaymentPageFormUncheckedCreateWithoutPaymentPageInput> | PaymentPageFormCreateWithoutPaymentPageInput[] | PaymentPageFormUncheckedCreateWithoutPaymentPageInput[]
    connectOrCreate?: PaymentPageFormCreateOrConnectWithoutPaymentPageInput | PaymentPageFormCreateOrConnectWithoutPaymentPageInput[]
    upsert?: PaymentPageFormUpsertWithWhereUniqueWithoutPaymentPageInput | PaymentPageFormUpsertWithWhereUniqueWithoutPaymentPageInput[]
    createMany?: PaymentPageFormCreateManyPaymentPageInputEnvelope
    set?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
    disconnect?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
    delete?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
    connect?: PaymentPageFormWhereUniqueInput | PaymentPageFormWhereUniqueInput[]
    update?: PaymentPageFormUpdateWithWhereUniqueWithoutPaymentPageInput | PaymentPageFormUpdateWithWhereUniqueWithoutPaymentPageInput[]
    updateMany?: PaymentPageFormUpdateManyWithWhereWithoutPaymentPageInput | PaymentPageFormUpdateManyWithWhereWithoutPaymentPageInput[]
    deleteMany?: PaymentPageFormScalarWhereInput | PaymentPageFormScalarWhereInput[]
  }

  export type PaymentPageCreateNestedOneWithoutIntiatedPaymentInput = {
    create?: XOR<PaymentPageCreateWithoutIntiatedPaymentInput, PaymentPageUncheckedCreateWithoutIntiatedPaymentInput>
    connectOrCreate?: PaymentPageCreateOrConnectWithoutIntiatedPaymentInput
    connect?: PaymentPageWhereUniqueInput
  }

  export type PaymentLinkCreateNestedOneWithoutIntiatedPaymentInput = {
    create?: XOR<PaymentLinkCreateWithoutIntiatedPaymentInput, PaymentLinkUncheckedCreateWithoutIntiatedPaymentInput>
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutIntiatedPaymentInput
    connect?: PaymentLinkWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutIntiatedPaymentInput = {
    create?: XOR<TransactionCreateWithoutIntiatedPaymentInput, TransactionUncheckedCreateWithoutIntiatedPaymentInput> | TransactionCreateWithoutIntiatedPaymentInput[] | TransactionUncheckedCreateWithoutIntiatedPaymentInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutIntiatedPaymentInput | TransactionCreateOrConnectWithoutIntiatedPaymentInput[]
    createMany?: TransactionCreateManyIntiatedPaymentInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutIntiatedPaymentInput = {
    create?: XOR<TransactionCreateWithoutIntiatedPaymentInput, TransactionUncheckedCreateWithoutIntiatedPaymentInput> | TransactionCreateWithoutIntiatedPaymentInput[] | TransactionUncheckedCreateWithoutIntiatedPaymentInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutIntiatedPaymentInput | TransactionCreateOrConnectWithoutIntiatedPaymentInput[]
    createMany?: TransactionCreateManyIntiatedPaymentInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumIntiatedFromFieldUpdateOperationsInput = {
    set?: $Enums.IntiatedFrom
  }

  export type EnumIntiatedPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.IntiatedPaymentStatus
  }

  export type PaymentPageUpdateOneWithoutIntiatedPaymentNestedInput = {
    create?: XOR<PaymentPageCreateWithoutIntiatedPaymentInput, PaymentPageUncheckedCreateWithoutIntiatedPaymentInput>
    connectOrCreate?: PaymentPageCreateOrConnectWithoutIntiatedPaymentInput
    upsert?: PaymentPageUpsertWithoutIntiatedPaymentInput
    disconnect?: PaymentPageWhereInput | boolean
    delete?: PaymentPageWhereInput | boolean
    connect?: PaymentPageWhereUniqueInput
    update?: XOR<XOR<PaymentPageUpdateToOneWithWhereWithoutIntiatedPaymentInput, PaymentPageUpdateWithoutIntiatedPaymentInput>, PaymentPageUncheckedUpdateWithoutIntiatedPaymentInput>
  }

  export type PaymentLinkUpdateOneWithoutIntiatedPaymentNestedInput = {
    create?: XOR<PaymentLinkCreateWithoutIntiatedPaymentInput, PaymentLinkUncheckedCreateWithoutIntiatedPaymentInput>
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutIntiatedPaymentInput
    upsert?: PaymentLinkUpsertWithoutIntiatedPaymentInput
    disconnect?: PaymentLinkWhereInput | boolean
    delete?: PaymentLinkWhereInput | boolean
    connect?: PaymentLinkWhereUniqueInput
    update?: XOR<XOR<PaymentLinkUpdateToOneWithWhereWithoutIntiatedPaymentInput, PaymentLinkUpdateWithoutIntiatedPaymentInput>, PaymentLinkUncheckedUpdateWithoutIntiatedPaymentInput>
  }

  export type TransactionUpdateManyWithoutIntiatedPaymentNestedInput = {
    create?: XOR<TransactionCreateWithoutIntiatedPaymentInput, TransactionUncheckedCreateWithoutIntiatedPaymentInput> | TransactionCreateWithoutIntiatedPaymentInput[] | TransactionUncheckedCreateWithoutIntiatedPaymentInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutIntiatedPaymentInput | TransactionCreateOrConnectWithoutIntiatedPaymentInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutIntiatedPaymentInput | TransactionUpsertWithWhereUniqueWithoutIntiatedPaymentInput[]
    createMany?: TransactionCreateManyIntiatedPaymentInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutIntiatedPaymentInput | TransactionUpdateWithWhereUniqueWithoutIntiatedPaymentInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutIntiatedPaymentInput | TransactionUpdateManyWithWhereWithoutIntiatedPaymentInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutIntiatedPaymentNestedInput = {
    create?: XOR<TransactionCreateWithoutIntiatedPaymentInput, TransactionUncheckedCreateWithoutIntiatedPaymentInput> | TransactionCreateWithoutIntiatedPaymentInput[] | TransactionUncheckedCreateWithoutIntiatedPaymentInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutIntiatedPaymentInput | TransactionCreateOrConnectWithoutIntiatedPaymentInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutIntiatedPaymentInput | TransactionUpsertWithWhereUniqueWithoutIntiatedPaymentInput[]
    createMany?: TransactionCreateManyIntiatedPaymentInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutIntiatedPaymentInput | TransactionUpdateWithWhereUniqueWithoutIntiatedPaymentInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutIntiatedPaymentInput | TransactionUpdateManyWithWhereWithoutIntiatedPaymentInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntiatedPaymentCreateNestedOneWithoutTransactionInput = {
    create?: XOR<IntiatedPaymentCreateWithoutTransactionInput, IntiatedPaymentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutTransactionInput
    connect?: IntiatedPaymentWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type IntiatedPaymentUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<IntiatedPaymentCreateWithoutTransactionInput, IntiatedPaymentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: IntiatedPaymentCreateOrConnectWithoutTransactionInput
    upsert?: IntiatedPaymentUpsertWithoutTransactionInput
    connect?: IntiatedPaymentWhereUniqueInput
    update?: XOR<XOR<IntiatedPaymentUpdateToOneWithWhereWithoutTransactionInput, IntiatedPaymentUpdateWithoutTransactionInput>, IntiatedPaymentUncheckedUpdateWithoutTransactionInput>
  }

  export type EnumPaymentButtonTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentButtonType
  }

  export type PaymentPageCreateNestedOneWithoutPaymentPageFormInput = {
    create?: XOR<PaymentPageCreateWithoutPaymentPageFormInput, PaymentPageUncheckedCreateWithoutPaymentPageFormInput>
    connectOrCreate?: PaymentPageCreateOrConnectWithoutPaymentPageFormInput
    connect?: PaymentPageWhereUniqueInput
  }

  export type PaymentPageFormFieldCreateNestedManyWithoutPaymentPageFormInput = {
    create?: XOR<PaymentPageFormFieldCreateWithoutPaymentPageFormInput, PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput> | PaymentPageFormFieldCreateWithoutPaymentPageFormInput[] | PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput[]
    connectOrCreate?: PaymentPageFormFieldCreateOrConnectWithoutPaymentPageFormInput | PaymentPageFormFieldCreateOrConnectWithoutPaymentPageFormInput[]
    createMany?: PaymentPageFormFieldCreateManyPaymentPageFormInputEnvelope
    connect?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
  }

  export type PaymentPageFormFieldUncheckedCreateNestedManyWithoutPaymentPageFormInput = {
    create?: XOR<PaymentPageFormFieldCreateWithoutPaymentPageFormInput, PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput> | PaymentPageFormFieldCreateWithoutPaymentPageFormInput[] | PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput[]
    connectOrCreate?: PaymentPageFormFieldCreateOrConnectWithoutPaymentPageFormInput | PaymentPageFormFieldCreateOrConnectWithoutPaymentPageFormInput[]
    createMany?: PaymentPageFormFieldCreateManyPaymentPageFormInputEnvelope
    connect?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
  }

  export type PaymentPageUpdateOneRequiredWithoutPaymentPageFormNestedInput = {
    create?: XOR<PaymentPageCreateWithoutPaymentPageFormInput, PaymentPageUncheckedCreateWithoutPaymentPageFormInput>
    connectOrCreate?: PaymentPageCreateOrConnectWithoutPaymentPageFormInput
    upsert?: PaymentPageUpsertWithoutPaymentPageFormInput
    connect?: PaymentPageWhereUniqueInput
    update?: XOR<XOR<PaymentPageUpdateToOneWithWhereWithoutPaymentPageFormInput, PaymentPageUpdateWithoutPaymentPageFormInput>, PaymentPageUncheckedUpdateWithoutPaymentPageFormInput>
  }

  export type PaymentPageFormFieldUpdateManyWithoutPaymentPageFormNestedInput = {
    create?: XOR<PaymentPageFormFieldCreateWithoutPaymentPageFormInput, PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput> | PaymentPageFormFieldCreateWithoutPaymentPageFormInput[] | PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput[]
    connectOrCreate?: PaymentPageFormFieldCreateOrConnectWithoutPaymentPageFormInput | PaymentPageFormFieldCreateOrConnectWithoutPaymentPageFormInput[]
    upsert?: PaymentPageFormFieldUpsertWithWhereUniqueWithoutPaymentPageFormInput | PaymentPageFormFieldUpsertWithWhereUniqueWithoutPaymentPageFormInput[]
    createMany?: PaymentPageFormFieldCreateManyPaymentPageFormInputEnvelope
    set?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
    disconnect?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
    delete?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
    connect?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
    update?: PaymentPageFormFieldUpdateWithWhereUniqueWithoutPaymentPageFormInput | PaymentPageFormFieldUpdateWithWhereUniqueWithoutPaymentPageFormInput[]
    updateMany?: PaymentPageFormFieldUpdateManyWithWhereWithoutPaymentPageFormInput | PaymentPageFormFieldUpdateManyWithWhereWithoutPaymentPageFormInput[]
    deleteMany?: PaymentPageFormFieldScalarWhereInput | PaymentPageFormFieldScalarWhereInput[]
  }

  export type PaymentPageFormFieldUncheckedUpdateManyWithoutPaymentPageFormNestedInput = {
    create?: XOR<PaymentPageFormFieldCreateWithoutPaymentPageFormInput, PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput> | PaymentPageFormFieldCreateWithoutPaymentPageFormInput[] | PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput[]
    connectOrCreate?: PaymentPageFormFieldCreateOrConnectWithoutPaymentPageFormInput | PaymentPageFormFieldCreateOrConnectWithoutPaymentPageFormInput[]
    upsert?: PaymentPageFormFieldUpsertWithWhereUniqueWithoutPaymentPageFormInput | PaymentPageFormFieldUpsertWithWhereUniqueWithoutPaymentPageFormInput[]
    createMany?: PaymentPageFormFieldCreateManyPaymentPageFormInputEnvelope
    set?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
    disconnect?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
    delete?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
    connect?: PaymentPageFormFieldWhereUniqueInput | PaymentPageFormFieldWhereUniqueInput[]
    update?: PaymentPageFormFieldUpdateWithWhereUniqueWithoutPaymentPageFormInput | PaymentPageFormFieldUpdateWithWhereUniqueWithoutPaymentPageFormInput[]
    updateMany?: PaymentPageFormFieldUpdateManyWithWhereWithoutPaymentPageFormInput | PaymentPageFormFieldUpdateManyWithWhereWithoutPaymentPageFormInput[]
    deleteMany?: PaymentPageFormFieldScalarWhereInput | PaymentPageFormFieldScalarWhereInput[]
  }

  export type PaymentPageFormCreateNestedOneWithoutPaymentPageFormFieldInput = {
    create?: XOR<PaymentPageFormCreateWithoutPaymentPageFormFieldInput, PaymentPageFormUncheckedCreateWithoutPaymentPageFormFieldInput>
    connectOrCreate?: PaymentPageFormCreateOrConnectWithoutPaymentPageFormFieldInput
    connect?: PaymentPageFormWhereUniqueInput
  }

  export type EnumPaymentPageFormFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentPageFormFieldType
  }

  export type PaymentPageFormUpdateOneRequiredWithoutPaymentPageFormFieldNestedInput = {
    create?: XOR<PaymentPageFormCreateWithoutPaymentPageFormFieldInput, PaymentPageFormUncheckedCreateWithoutPaymentPageFormFieldInput>
    connectOrCreate?: PaymentPageFormCreateOrConnectWithoutPaymentPageFormFieldInput
    upsert?: PaymentPageFormUpsertWithoutPaymentPageFormFieldInput
    connect?: PaymentPageFormWhereUniqueInput
    update?: XOR<XOR<PaymentPageFormUpdateToOneWithWhereWithoutPaymentPageFormFieldInput, PaymentPageFormUpdateWithoutPaymentPageFormFieldInput>, PaymentPageFormUncheckedUpdateWithoutPaymentPageFormFieldInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentLinkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentLinkStatus | EnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentLinkStatus[] | ListEnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentLinkStatus[] | ListEnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentLinkStatusFilter<$PrismaModel> | $Enums.PaymentLinkStatus
  }

  export type NestedEnumPaymentLinkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentLinkStatus | EnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentLinkStatus[] | ListEnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentLinkStatus[] | ListEnumPaymentLinkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentLinkStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentLinkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentLinkStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentLinkStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPageStatus | EnumPaymentPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPageStatus[] | ListEnumPaymentPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPageStatus[] | ListEnumPaymentPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPageStatusFilter<$PrismaModel> | $Enums.PaymentPageStatus
  }

  export type NestedEnumPaymentPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPageStatus | EnumPaymentPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPageStatus[] | ListEnumPaymentPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPageStatus[] | ListEnumPaymentPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentPageStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentPageStatusFilter<$PrismaModel>
  }

  export type NestedEnumIntiatedFromFilter<$PrismaModel = never> = {
    equals?: $Enums.IntiatedFrom | EnumIntiatedFromFieldRefInput<$PrismaModel>
    in?: $Enums.IntiatedFrom[] | ListEnumIntiatedFromFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntiatedFrom[] | ListEnumIntiatedFromFieldRefInput<$PrismaModel>
    not?: NestedEnumIntiatedFromFilter<$PrismaModel> | $Enums.IntiatedFrom
  }

  export type NestedEnumIntiatedPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntiatedPaymentStatus | EnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntiatedPaymentStatus[] | ListEnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntiatedPaymentStatus[] | ListEnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntiatedPaymentStatusFilter<$PrismaModel> | $Enums.IntiatedPaymentStatus
  }

  export type NestedEnumIntiatedFromWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntiatedFrom | EnumIntiatedFromFieldRefInput<$PrismaModel>
    in?: $Enums.IntiatedFrom[] | ListEnumIntiatedFromFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntiatedFrom[] | ListEnumIntiatedFromFieldRefInput<$PrismaModel>
    not?: NestedEnumIntiatedFromWithAggregatesFilter<$PrismaModel> | $Enums.IntiatedFrom
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntiatedFromFilter<$PrismaModel>
    _max?: NestedEnumIntiatedFromFilter<$PrismaModel>
  }

  export type NestedEnumIntiatedPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntiatedPaymentStatus | EnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntiatedPaymentStatus[] | ListEnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntiatedPaymentStatus[] | ListEnumIntiatedPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntiatedPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IntiatedPaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntiatedPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumIntiatedPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentButtonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentButtonType | EnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentButtonType[] | ListEnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentButtonType[] | ListEnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentButtonTypeFilter<$PrismaModel> | $Enums.PaymentButtonType
  }

  export type NestedEnumPaymentButtonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentButtonType | EnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentButtonType[] | ListEnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentButtonType[] | ListEnumPaymentButtonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentButtonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentButtonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentButtonTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentButtonTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentPageFormFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPageFormFieldType | EnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPageFormFieldType[] | ListEnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPageFormFieldType[] | ListEnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPageFormFieldTypeFilter<$PrismaModel> | $Enums.PaymentPageFormFieldType
  }

  export type NestedEnumPaymentPageFormFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPageFormFieldType | EnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPageFormFieldType[] | ListEnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPageFormFieldType[] | ListEnumPaymentPageFormFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPageFormFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPageFormFieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentPageFormFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentPageFormFieldTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthenticatorCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUncheckedCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorCreateOrConnectWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorCreateManyUserInputEnvelope = {
    data: AuthenticatorCreateManyUserInput | AuthenticatorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentLinkCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentLinkStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    description?: string | null
    IntiatedPayment?: IntiatedPaymentCreateNestedManyWithoutPaymentLinkInput
  }

  export type PaymentLinkUncheckedCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentLinkStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    description?: string | null
    IntiatedPayment?: IntiatedPaymentUncheckedCreateNestedManyWithoutPaymentLinkInput
  }

  export type PaymentLinkCreateOrConnectWithoutUserInput = {
    where: PaymentLinkWhereUniqueInput
    create: XOR<PaymentLinkCreateWithoutUserInput, PaymentLinkUncheckedCreateWithoutUserInput>
  }

  export type PaymentLinkCreateManyUserInputEnvelope = {
    data: PaymentLinkCreateManyUserInput | PaymentLinkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletCreateWithoutUserInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    stableCoin: StableCoinCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    stableCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletCreateManyUserInputEnvelope = {
    data: WalletCreateManyUserInput | WalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentPageCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
    IntiatedPayment?: IntiatedPaymentCreateNestedManyWithoutPaymentPageInput
    PaymentPageForm?: PaymentPageFormCreateNestedManyWithoutPaymentPageInput
  }

  export type PaymentPageUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
    IntiatedPayment?: IntiatedPaymentUncheckedCreateNestedManyWithoutPaymentPageInput
    PaymentPageForm?: PaymentPageFormUncheckedCreateNestedManyWithoutPaymentPageInput
  }

  export type PaymentPageCreateOrConnectWithoutUserInput = {
    where: PaymentPageWhereUniqueInput
    create: XOR<PaymentPageCreateWithoutUserInput, PaymentPageUncheckedCreateWithoutUserInput>
  }

  export type PaymentPageCreateManyUserInputEnvelope = {
    data: PaymentPageCreateManyUserInput | PaymentPageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AuthenticatorUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    update: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    data: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
  }

  export type AuthenticatorUpdateManyWithWhereWithoutUserInput = {
    where: AuthenticatorScalarWhereInput
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthenticatorScalarWhereInput = {
    AND?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    OR?: AuthenticatorScalarWhereInput[]
    NOT?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
  }

  export type PaymentLinkUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentLinkWhereUniqueInput
    update: XOR<PaymentLinkUpdateWithoutUserInput, PaymentLinkUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentLinkCreateWithoutUserInput, PaymentLinkUncheckedCreateWithoutUserInput>
  }

  export type PaymentLinkUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentLinkWhereUniqueInput
    data: XOR<PaymentLinkUpdateWithoutUserInput, PaymentLinkUncheckedUpdateWithoutUserInput>
  }

  export type PaymentLinkUpdateManyWithWhereWithoutUserInput = {
    where: PaymentLinkScalarWhereInput
    data: XOR<PaymentLinkUpdateManyMutationInput, PaymentLinkUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentLinkScalarWhereInput = {
    AND?: PaymentLinkScalarWhereInput | PaymentLinkScalarWhereInput[]
    OR?: PaymentLinkScalarWhereInput[]
    NOT?: PaymentLinkScalarWhereInput | PaymentLinkScalarWhereInput[]
    id?: StringFilter<"PaymentLink"> | string
    amount?: DecimalFilter<"PaymentLink"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFilter<"PaymentLink"> | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFilter<"PaymentLink"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentLink"> | Date | string
    expiresAt?: DateTimeNullableFilter<"PaymentLink"> | Date | string | null
    description?: StringNullableFilter<"PaymentLink"> | string | null
    userId?: StringFilter<"PaymentLink"> | string
  }

  export type WalletUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateManyWithWhereWithoutUserInput = {
    where: WalletScalarWhereInput
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyWithoutUserInput>
  }

  export type WalletScalarWhereInput = {
    AND?: WalletScalarWhereInput | WalletScalarWhereInput[]
    OR?: WalletScalarWhereInput[]
    NOT?: WalletScalarWhereInput | WalletScalarWhereInput[]
    id?: StringFilter<"Wallet"> | string
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"Wallet"> | string
    stableCoinId?: StringFilter<"Wallet"> | string
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
  }

  export type PaymentPageUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentPageWhereUniqueInput
    update: XOR<PaymentPageUpdateWithoutUserInput, PaymentPageUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentPageCreateWithoutUserInput, PaymentPageUncheckedCreateWithoutUserInput>
  }

  export type PaymentPageUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentPageWhereUniqueInput
    data: XOR<PaymentPageUpdateWithoutUserInput, PaymentPageUncheckedUpdateWithoutUserInput>
  }

  export type PaymentPageUpdateManyWithWhereWithoutUserInput = {
    where: PaymentPageScalarWhereInput
    data: XOR<PaymentPageUpdateManyMutationInput, PaymentPageUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentPageScalarWhereInput = {
    AND?: PaymentPageScalarWhereInput | PaymentPageScalarWhereInput[]
    OR?: PaymentPageScalarWhereInput[]
    NOT?: PaymentPageScalarWhereInput | PaymentPageScalarWhereInput[]
    id?: StringFilter<"PaymentPage"> | string
    title?: StringFilter<"PaymentPage"> | string
    description?: StringNullableFilter<"PaymentPage"> | string | null
    logoUrl?: StringFilter<"PaymentPage"> | string
    amount?: DecimalFilter<"PaymentPage"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"PaymentPage"> | string
    expiresAt?: DateTimeNullableFilter<"PaymentPage"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentPage"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPage"> | Date | string
    status?: EnumPaymentPageStatusFilter<"PaymentPage"> | $Enums.PaymentPageStatus
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkCreateNestedManyWithoutUserInput
    Wallet?: WalletCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkUncheckedCreateNestedManyWithoutUserInput
    Wallet?: WalletUncheckedCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUpdateManyWithoutUserNestedInput
    Wallet?: WalletUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUncheckedUpdateManyWithoutUserNestedInput
    Wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkCreateNestedManyWithoutUserInput
    Wallet?: WalletCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkUncheckedCreateNestedManyWithoutUserInput
    Wallet?: WalletUncheckedCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUpdateManyWithoutUserNestedInput
    Wallet?: WalletUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUncheckedUpdateManyWithoutUserNestedInput
    Wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkCreateNestedManyWithoutUserInput
    Wallet?: WalletCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkUncheckedCreateNestedManyWithoutUserInput
    Wallet?: WalletUncheckedCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthenticatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
  }

  export type UserUpsertWithoutAuthenticatorInput = {
    update: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthenticatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
  }

  export type UserUpdateWithoutAuthenticatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUpdateManyWithoutUserNestedInput
    Wallet?: WalletUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthenticatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUncheckedUpdateManyWithoutUserNestedInput
    Wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkUncheckedCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type StableCoinCreateWithoutWalletInput = {
    id?: string
    name: string
    symbol: string
    logoUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StableCoinUncheckedCreateWithoutWalletInput = {
    id?: string
    name: string
    symbol: string
    logoUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StableCoinCreateOrConnectWithoutWalletInput = {
    where: StableCoinWhereUniqueInput
    create: XOR<StableCoinCreateWithoutWalletInput, StableCoinUncheckedCreateWithoutWalletInput>
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUncheckedUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StableCoinUpsertWithoutWalletInput = {
    update: XOR<StableCoinUpdateWithoutWalletInput, StableCoinUncheckedUpdateWithoutWalletInput>
    create: XOR<StableCoinCreateWithoutWalletInput, StableCoinUncheckedCreateWithoutWalletInput>
    where?: StableCoinWhereInput
  }

  export type StableCoinUpdateToOneWithWhereWithoutWalletInput = {
    where?: StableCoinWhereInput
    data: XOR<StableCoinUpdateWithoutWalletInput, StableCoinUncheckedUpdateWithoutWalletInput>
  }

  export type StableCoinUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableCoinUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateWithoutStableCoinInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutStableCoinInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletCreateOrConnectWithoutStableCoinInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutStableCoinInput, WalletUncheckedCreateWithoutStableCoinInput>
  }

  export type WalletCreateManyStableCoinInputEnvelope = {
    data: WalletCreateManyStableCoinInput | WalletCreateManyStableCoinInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithWhereUniqueWithoutStableCoinInput = {
    where: WalletWhereUniqueInput
    update: XOR<WalletUpdateWithoutStableCoinInput, WalletUncheckedUpdateWithoutStableCoinInput>
    create: XOR<WalletCreateWithoutStableCoinInput, WalletUncheckedCreateWithoutStableCoinInput>
  }

  export type WalletUpdateWithWhereUniqueWithoutStableCoinInput = {
    where: WalletWhereUniqueInput
    data: XOR<WalletUpdateWithoutStableCoinInput, WalletUncheckedUpdateWithoutStableCoinInput>
  }

  export type WalletUpdateManyWithWhereWithoutStableCoinInput = {
    where: WalletScalarWhereInput
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyWithoutStableCoinInput>
  }

  export type UserCreateWithoutPaymentLinkInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Wallet?: WalletCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentLinkInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Wallet?: WalletUncheckedCreateNestedManyWithoutUserInput
    PaymentPage?: PaymentPageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentLinkInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentLinkInput, UserUncheckedCreateWithoutPaymentLinkInput>
  }

  export type IntiatedPaymentCreateWithoutPaymentLinkInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPage?: PaymentPageCreateNestedOneWithoutIntiatedPaymentInput
    Transaction?: TransactionCreateNestedManyWithoutIntiatedPaymentInput
  }

  export type IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    paymentPageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutIntiatedPaymentInput
  }

  export type IntiatedPaymentCreateOrConnectWithoutPaymentLinkInput = {
    where: IntiatedPaymentWhereUniqueInput
    create: XOR<IntiatedPaymentCreateWithoutPaymentLinkInput, IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput>
  }

  export type IntiatedPaymentCreateManyPaymentLinkInputEnvelope = {
    data: IntiatedPaymentCreateManyPaymentLinkInput | IntiatedPaymentCreateManyPaymentLinkInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPaymentLinkInput = {
    update: XOR<UserUpdateWithoutPaymentLinkInput, UserUncheckedUpdateWithoutPaymentLinkInput>
    create: XOR<UserCreateWithoutPaymentLinkInput, UserUncheckedCreateWithoutPaymentLinkInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentLinkInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentLinkInput, UserUncheckedUpdateWithoutPaymentLinkInput>
  }

  export type UserUpdateWithoutPaymentLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Wallet?: WalletUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput
    PaymentPage?: PaymentPageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentLinkInput = {
    where: IntiatedPaymentWhereUniqueInput
    update: XOR<IntiatedPaymentUpdateWithoutPaymentLinkInput, IntiatedPaymentUncheckedUpdateWithoutPaymentLinkInput>
    create: XOR<IntiatedPaymentCreateWithoutPaymentLinkInput, IntiatedPaymentUncheckedCreateWithoutPaymentLinkInput>
  }

  export type IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentLinkInput = {
    where: IntiatedPaymentWhereUniqueInput
    data: XOR<IntiatedPaymentUpdateWithoutPaymentLinkInput, IntiatedPaymentUncheckedUpdateWithoutPaymentLinkInput>
  }

  export type IntiatedPaymentUpdateManyWithWhereWithoutPaymentLinkInput = {
    where: IntiatedPaymentScalarWhereInput
    data: XOR<IntiatedPaymentUpdateManyMutationInput, IntiatedPaymentUncheckedUpdateManyWithoutPaymentLinkInput>
  }

  export type IntiatedPaymentScalarWhereInput = {
    AND?: IntiatedPaymentScalarWhereInput | IntiatedPaymentScalarWhereInput[]
    OR?: IntiatedPaymentScalarWhereInput[]
    NOT?: IntiatedPaymentScalarWhereInput | IntiatedPaymentScalarWhereInput[]
    id?: StringFilter<"IntiatedPayment"> | string
    initiatedFrom?: EnumIntiatedFromFilter<"IntiatedPayment"> | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFilter<"IntiatedPayment"> | $Enums.IntiatedPaymentStatus
    index?: IntFilter<"IntiatedPayment"> | number
    walletAddress?: StringFilter<"IntiatedPayment"> | string
    amount?: DecimalFilter<"IntiatedPayment"> | Decimal | DecimalJsLike | number | string
    paymentPageId?: StringNullableFilter<"IntiatedPayment"> | string | null
    paymentLinkId?: StringNullableFilter<"IntiatedPayment"> | string | null
    createdAt?: DateTimeFilter<"IntiatedPayment"> | Date | string
    updatedAt?: DateTimeFilter<"IntiatedPayment"> | Date | string
  }

  export type UserCreateWithoutPaymentPageInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkCreateNestedManyWithoutUserInput
    Wallet?: WalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentPageInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PaymentLink?: PaymentLinkUncheckedCreateNestedManyWithoutUserInput
    Wallet?: WalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentPageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentPageInput, UserUncheckedCreateWithoutPaymentPageInput>
  }

  export type IntiatedPaymentCreateWithoutPaymentPageInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentLink?: PaymentLinkCreateNestedOneWithoutIntiatedPaymentInput
    Transaction?: TransactionCreateNestedManyWithoutIntiatedPaymentInput
  }

  export type IntiatedPaymentUncheckedCreateWithoutPaymentPageInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    paymentLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutIntiatedPaymentInput
  }

  export type IntiatedPaymentCreateOrConnectWithoutPaymentPageInput = {
    where: IntiatedPaymentWhereUniqueInput
    create: XOR<IntiatedPaymentCreateWithoutPaymentPageInput, IntiatedPaymentUncheckedCreateWithoutPaymentPageInput>
  }

  export type IntiatedPaymentCreateManyPaymentPageInputEnvelope = {
    data: IntiatedPaymentCreateManyPaymentPageInput | IntiatedPaymentCreateManyPaymentPageInput[]
    skipDuplicates?: boolean
  }

  export type PaymentPageFormCreateWithoutPaymentPageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PaymentPageFormField?: PaymentPageFormFieldCreateNestedManyWithoutPaymentPageFormInput
  }

  export type PaymentPageFormUncheckedCreateWithoutPaymentPageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PaymentPageFormField?: PaymentPageFormFieldUncheckedCreateNestedManyWithoutPaymentPageFormInput
  }

  export type PaymentPageFormCreateOrConnectWithoutPaymentPageInput = {
    where: PaymentPageFormWhereUniqueInput
    create: XOR<PaymentPageFormCreateWithoutPaymentPageInput, PaymentPageFormUncheckedCreateWithoutPaymentPageInput>
  }

  export type PaymentPageFormCreateManyPaymentPageInputEnvelope = {
    data: PaymentPageFormCreateManyPaymentPageInput | PaymentPageFormCreateManyPaymentPageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPaymentPageInput = {
    update: XOR<UserUpdateWithoutPaymentPageInput, UserUncheckedUpdateWithoutPaymentPageInput>
    create: XOR<UserCreateWithoutPaymentPageInput, UserUncheckedCreateWithoutPaymentPageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentPageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentPageInput, UserUncheckedUpdateWithoutPaymentPageInput>
  }

  export type UserUpdateWithoutPaymentPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUpdateManyWithoutUserNestedInput
    Wallet?: WalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PaymentLink?: PaymentLinkUncheckedUpdateManyWithoutUserNestedInput
    Wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IntiatedPaymentUpsertWithWhereUniqueWithoutPaymentPageInput = {
    where: IntiatedPaymentWhereUniqueInput
    update: XOR<IntiatedPaymentUpdateWithoutPaymentPageInput, IntiatedPaymentUncheckedUpdateWithoutPaymentPageInput>
    create: XOR<IntiatedPaymentCreateWithoutPaymentPageInput, IntiatedPaymentUncheckedCreateWithoutPaymentPageInput>
  }

  export type IntiatedPaymentUpdateWithWhereUniqueWithoutPaymentPageInput = {
    where: IntiatedPaymentWhereUniqueInput
    data: XOR<IntiatedPaymentUpdateWithoutPaymentPageInput, IntiatedPaymentUncheckedUpdateWithoutPaymentPageInput>
  }

  export type IntiatedPaymentUpdateManyWithWhereWithoutPaymentPageInput = {
    where: IntiatedPaymentScalarWhereInput
    data: XOR<IntiatedPaymentUpdateManyMutationInput, IntiatedPaymentUncheckedUpdateManyWithoutPaymentPageInput>
  }

  export type PaymentPageFormUpsertWithWhereUniqueWithoutPaymentPageInput = {
    where: PaymentPageFormWhereUniqueInput
    update: XOR<PaymentPageFormUpdateWithoutPaymentPageInput, PaymentPageFormUncheckedUpdateWithoutPaymentPageInput>
    create: XOR<PaymentPageFormCreateWithoutPaymentPageInput, PaymentPageFormUncheckedCreateWithoutPaymentPageInput>
  }

  export type PaymentPageFormUpdateWithWhereUniqueWithoutPaymentPageInput = {
    where: PaymentPageFormWhereUniqueInput
    data: XOR<PaymentPageFormUpdateWithoutPaymentPageInput, PaymentPageFormUncheckedUpdateWithoutPaymentPageInput>
  }

  export type PaymentPageFormUpdateManyWithWhereWithoutPaymentPageInput = {
    where: PaymentPageFormScalarWhereInput
    data: XOR<PaymentPageFormUpdateManyMutationInput, PaymentPageFormUncheckedUpdateManyWithoutPaymentPageInput>
  }

  export type PaymentPageFormScalarWhereInput = {
    AND?: PaymentPageFormScalarWhereInput | PaymentPageFormScalarWhereInput[]
    OR?: PaymentPageFormScalarWhereInput[]
    NOT?: PaymentPageFormScalarWhereInput | PaymentPageFormScalarWhereInput[]
    id?: StringFilter<"PaymentPageForm"> | string
    paymentPageId?: StringFilter<"PaymentPageForm"> | string
    createdAt?: DateTimeFilter<"PaymentPageForm"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPageForm"> | Date | string
  }

  export type PaymentPageCreateWithoutIntiatedPaymentInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
    user: UserCreateNestedOneWithoutPaymentPageInput
    PaymentPageForm?: PaymentPageFormCreateNestedManyWithoutPaymentPageInput
  }

  export type PaymentPageUncheckedCreateWithoutIntiatedPaymentInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
    PaymentPageForm?: PaymentPageFormUncheckedCreateNestedManyWithoutPaymentPageInput
  }

  export type PaymentPageCreateOrConnectWithoutIntiatedPaymentInput = {
    where: PaymentPageWhereUniqueInput
    create: XOR<PaymentPageCreateWithoutIntiatedPaymentInput, PaymentPageUncheckedCreateWithoutIntiatedPaymentInput>
  }

  export type PaymentLinkCreateWithoutIntiatedPaymentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentLinkStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    description?: string | null
    user: UserCreateNestedOneWithoutPaymentLinkInput
  }

  export type PaymentLinkUncheckedCreateWithoutIntiatedPaymentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentLinkStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    description?: string | null
    userId: string
  }

  export type PaymentLinkCreateOrConnectWithoutIntiatedPaymentInput = {
    where: PaymentLinkWhereUniqueInput
    create: XOR<PaymentLinkCreateWithoutIntiatedPaymentInput, PaymentLinkUncheckedCreateWithoutIntiatedPaymentInput>
  }

  export type TransactionCreateWithoutIntiatedPaymentInput = {
    id?: string
    status: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    initiatedFrom: $Enums.IntiatedFrom
    toAddress: string
    fromAddress: string
    settled: boolean
    settledAt?: Date | string | null
    settledTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutIntiatedPaymentInput = {
    id?: string
    status: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    initiatedFrom: $Enums.IntiatedFrom
    toAddress: string
    fromAddress: string
    settled: boolean
    settledAt?: Date | string | null
    settledTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutIntiatedPaymentInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutIntiatedPaymentInput, TransactionUncheckedCreateWithoutIntiatedPaymentInput>
  }

  export type TransactionCreateManyIntiatedPaymentInputEnvelope = {
    data: TransactionCreateManyIntiatedPaymentInput | TransactionCreateManyIntiatedPaymentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentPageUpsertWithoutIntiatedPaymentInput = {
    update: XOR<PaymentPageUpdateWithoutIntiatedPaymentInput, PaymentPageUncheckedUpdateWithoutIntiatedPaymentInput>
    create: XOR<PaymentPageCreateWithoutIntiatedPaymentInput, PaymentPageUncheckedCreateWithoutIntiatedPaymentInput>
    where?: PaymentPageWhereInput
  }

  export type PaymentPageUpdateToOneWithWhereWithoutIntiatedPaymentInput = {
    where?: PaymentPageWhereInput
    data: XOR<PaymentPageUpdateWithoutIntiatedPaymentInput, PaymentPageUncheckedUpdateWithoutIntiatedPaymentInput>
  }

  export type PaymentPageUpdateWithoutIntiatedPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
    user?: UserUpdateOneRequiredWithoutPaymentPageNestedInput
    PaymentPageForm?: PaymentPageFormUpdateManyWithoutPaymentPageNestedInput
  }

  export type PaymentPageUncheckedUpdateWithoutIntiatedPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
    PaymentPageForm?: PaymentPageFormUncheckedUpdateManyWithoutPaymentPageNestedInput
  }

  export type PaymentLinkUpsertWithoutIntiatedPaymentInput = {
    update: XOR<PaymentLinkUpdateWithoutIntiatedPaymentInput, PaymentLinkUncheckedUpdateWithoutIntiatedPaymentInput>
    create: XOR<PaymentLinkCreateWithoutIntiatedPaymentInput, PaymentLinkUncheckedCreateWithoutIntiatedPaymentInput>
    where?: PaymentLinkWhereInput
  }

  export type PaymentLinkUpdateToOneWithWhereWithoutIntiatedPaymentInput = {
    where?: PaymentLinkWhereInput
    data: XOR<PaymentLinkUpdateWithoutIntiatedPaymentInput, PaymentLinkUncheckedUpdateWithoutIntiatedPaymentInput>
  }

  export type PaymentLinkUpdateWithoutIntiatedPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentLinkNestedInput
  }

  export type PaymentLinkUncheckedUpdateWithoutIntiatedPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutIntiatedPaymentInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutIntiatedPaymentInput, TransactionUncheckedUpdateWithoutIntiatedPaymentInput>
    create: XOR<TransactionCreateWithoutIntiatedPaymentInput, TransactionUncheckedCreateWithoutIntiatedPaymentInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutIntiatedPaymentInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutIntiatedPaymentInput, TransactionUncheckedUpdateWithoutIntiatedPaymentInput>
  }

  export type TransactionUpdateManyWithWhereWithoutIntiatedPaymentInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutIntiatedPaymentInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    intiatedPaymentId?: StringFilter<"Transaction"> | string
    initiatedFrom?: EnumIntiatedFromFilter<"Transaction"> | $Enums.IntiatedFrom
    toAddress?: StringFilter<"Transaction"> | string
    fromAddress?: StringFilter<"Transaction"> | string
    settled?: BoolFilter<"Transaction"> | boolean
    settledAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    settledTo?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type IntiatedPaymentCreateWithoutTransactionInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPage?: PaymentPageCreateNestedOneWithoutIntiatedPaymentInput
    paymentLink?: PaymentLinkCreateNestedOneWithoutIntiatedPaymentInput
  }

  export type IntiatedPaymentUncheckedCreateWithoutTransactionInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    paymentPageId?: string | null
    paymentLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntiatedPaymentCreateOrConnectWithoutTransactionInput = {
    where: IntiatedPaymentWhereUniqueInput
    create: XOR<IntiatedPaymentCreateWithoutTransactionInput, IntiatedPaymentUncheckedCreateWithoutTransactionInput>
  }

  export type IntiatedPaymentUpsertWithoutTransactionInput = {
    update: XOR<IntiatedPaymentUpdateWithoutTransactionInput, IntiatedPaymentUncheckedUpdateWithoutTransactionInput>
    create: XOR<IntiatedPaymentCreateWithoutTransactionInput, IntiatedPaymentUncheckedCreateWithoutTransactionInput>
    where?: IntiatedPaymentWhereInput
  }

  export type IntiatedPaymentUpdateToOneWithWhereWithoutTransactionInput = {
    where?: IntiatedPaymentWhereInput
    data: XOR<IntiatedPaymentUpdateWithoutTransactionInput, IntiatedPaymentUncheckedUpdateWithoutTransactionInput>
  }

  export type IntiatedPaymentUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPage?: PaymentPageUpdateOneWithoutIntiatedPaymentNestedInput
    paymentLink?: PaymentLinkUpdateOneWithoutIntiatedPaymentNestedInput
  }

  export type IntiatedPaymentUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentPageId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageCreateWithoutPaymentPageFormInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
    user: UserCreateNestedOneWithoutPaymentPageInput
    IntiatedPayment?: IntiatedPaymentCreateNestedManyWithoutPaymentPageInput
  }

  export type PaymentPageUncheckedCreateWithoutPaymentPageFormInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
    IntiatedPayment?: IntiatedPaymentUncheckedCreateNestedManyWithoutPaymentPageInput
  }

  export type PaymentPageCreateOrConnectWithoutPaymentPageFormInput = {
    where: PaymentPageWhereUniqueInput
    create: XOR<PaymentPageCreateWithoutPaymentPageFormInput, PaymentPageUncheckedCreateWithoutPaymentPageFormInput>
  }

  export type PaymentPageFormFieldCreateWithoutPaymentPageFormInput = {
    id?: string
    type: $Enums.PaymentPageFormFieldType
    label: string
    placeholder?: string | null
    required?: boolean
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput = {
    id?: string
    type: $Enums.PaymentPageFormFieldType
    label: string
    placeholder?: string | null
    required?: boolean
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPageFormFieldCreateOrConnectWithoutPaymentPageFormInput = {
    where: PaymentPageFormFieldWhereUniqueInput
    create: XOR<PaymentPageFormFieldCreateWithoutPaymentPageFormInput, PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput>
  }

  export type PaymentPageFormFieldCreateManyPaymentPageFormInputEnvelope = {
    data: PaymentPageFormFieldCreateManyPaymentPageFormInput | PaymentPageFormFieldCreateManyPaymentPageFormInput[]
    skipDuplicates?: boolean
  }

  export type PaymentPageUpsertWithoutPaymentPageFormInput = {
    update: XOR<PaymentPageUpdateWithoutPaymentPageFormInput, PaymentPageUncheckedUpdateWithoutPaymentPageFormInput>
    create: XOR<PaymentPageCreateWithoutPaymentPageFormInput, PaymentPageUncheckedCreateWithoutPaymentPageFormInput>
    where?: PaymentPageWhereInput
  }

  export type PaymentPageUpdateToOneWithWhereWithoutPaymentPageFormInput = {
    where?: PaymentPageWhereInput
    data: XOR<PaymentPageUpdateWithoutPaymentPageFormInput, PaymentPageUncheckedUpdateWithoutPaymentPageFormInput>
  }

  export type PaymentPageUpdateWithoutPaymentPageFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
    user?: UserUpdateOneRequiredWithoutPaymentPageNestedInput
    IntiatedPayment?: IntiatedPaymentUpdateManyWithoutPaymentPageNestedInput
  }

  export type PaymentPageUncheckedUpdateWithoutPaymentPageFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
    IntiatedPayment?: IntiatedPaymentUncheckedUpdateManyWithoutPaymentPageNestedInput
  }

  export type PaymentPageFormFieldUpsertWithWhereUniqueWithoutPaymentPageFormInput = {
    where: PaymentPageFormFieldWhereUniqueInput
    update: XOR<PaymentPageFormFieldUpdateWithoutPaymentPageFormInput, PaymentPageFormFieldUncheckedUpdateWithoutPaymentPageFormInput>
    create: XOR<PaymentPageFormFieldCreateWithoutPaymentPageFormInput, PaymentPageFormFieldUncheckedCreateWithoutPaymentPageFormInput>
  }

  export type PaymentPageFormFieldUpdateWithWhereUniqueWithoutPaymentPageFormInput = {
    where: PaymentPageFormFieldWhereUniqueInput
    data: XOR<PaymentPageFormFieldUpdateWithoutPaymentPageFormInput, PaymentPageFormFieldUncheckedUpdateWithoutPaymentPageFormInput>
  }

  export type PaymentPageFormFieldUpdateManyWithWhereWithoutPaymentPageFormInput = {
    where: PaymentPageFormFieldScalarWhereInput
    data: XOR<PaymentPageFormFieldUpdateManyMutationInput, PaymentPageFormFieldUncheckedUpdateManyWithoutPaymentPageFormInput>
  }

  export type PaymentPageFormFieldScalarWhereInput = {
    AND?: PaymentPageFormFieldScalarWhereInput | PaymentPageFormFieldScalarWhereInput[]
    OR?: PaymentPageFormFieldScalarWhereInput[]
    NOT?: PaymentPageFormFieldScalarWhereInput | PaymentPageFormFieldScalarWhereInput[]
    id?: StringFilter<"PaymentPageFormField"> | string
    type?: EnumPaymentPageFormFieldTypeFilter<"PaymentPageFormField"> | $Enums.PaymentPageFormFieldType
    label?: StringFilter<"PaymentPageFormField"> | string
    placeholder?: StringNullableFilter<"PaymentPageFormField"> | string | null
    required?: BoolFilter<"PaymentPageFormField"> | boolean
    value?: StringNullableFilter<"PaymentPageFormField"> | string | null
    paymentPageFormId?: StringFilter<"PaymentPageFormField"> | string
    createdAt?: DateTimeFilter<"PaymentPageFormField"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPageFormField"> | Date | string
  }

  export type PaymentPageFormCreateWithoutPaymentPageFormFieldInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPage: PaymentPageCreateNestedOneWithoutPaymentPageFormInput
  }

  export type PaymentPageFormUncheckedCreateWithoutPaymentPageFormFieldInput = {
    id?: string
    paymentPageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPageFormCreateOrConnectWithoutPaymentPageFormFieldInput = {
    where: PaymentPageFormWhereUniqueInput
    create: XOR<PaymentPageFormCreateWithoutPaymentPageFormFieldInput, PaymentPageFormUncheckedCreateWithoutPaymentPageFormFieldInput>
  }

  export type PaymentPageFormUpsertWithoutPaymentPageFormFieldInput = {
    update: XOR<PaymentPageFormUpdateWithoutPaymentPageFormFieldInput, PaymentPageFormUncheckedUpdateWithoutPaymentPageFormFieldInput>
    create: XOR<PaymentPageFormCreateWithoutPaymentPageFormFieldInput, PaymentPageFormUncheckedCreateWithoutPaymentPageFormFieldInput>
    where?: PaymentPageFormWhereInput
  }

  export type PaymentPageFormUpdateToOneWithWhereWithoutPaymentPageFormFieldInput = {
    where?: PaymentPageFormWhereInput
    data: XOR<PaymentPageFormUpdateWithoutPaymentPageFormFieldInput, PaymentPageFormUncheckedUpdateWithoutPaymentPageFormFieldInput>
  }

  export type PaymentPageFormUpdateWithoutPaymentPageFormFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPage?: PaymentPageUpdateOneRequiredWithoutPaymentPageFormNestedInput
  }

  export type PaymentPageFormUncheckedUpdateWithoutPaymentPageFormFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentPageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticatorCreateManyUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type PaymentLinkCreateManyUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentLinkStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    description?: string | null
  }

  export type WalletCreateManyUserInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    stableCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPageCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    logoUrl: string
    amount: Decimal | DecimalJsLike | number | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.PaymentPageStatus
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentLinkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IntiatedPayment?: IntiatedPaymentUpdateManyWithoutPaymentLinkNestedInput
  }

  export type PaymentLinkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IntiatedPayment?: IntiatedPaymentUncheckedUpdateManyWithoutPaymentLinkNestedInput
  }

  export type PaymentLinkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput | $Enums.PaymentLinkStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stableCoin?: StableCoinUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stableCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stableCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
    IntiatedPayment?: IntiatedPaymentUpdateManyWithoutPaymentPageNestedInput
    PaymentPageForm?: PaymentPageFormUpdateManyWithoutPaymentPageNestedInput
  }

  export type PaymentPageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
    IntiatedPayment?: IntiatedPaymentUncheckedUpdateManyWithoutPaymentPageNestedInput
    PaymentPageForm?: PaymentPageFormUncheckedUpdateManyWithoutPaymentPageNestedInput
  }

  export type PaymentPageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentPageStatusFieldUpdateOperationsInput | $Enums.PaymentPageStatus
  }

  export type WalletCreateManyStableCoinInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUpdateWithoutStableCoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutStableCoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyWithoutStableCoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntiatedPaymentCreateManyPaymentLinkInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    paymentPageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntiatedPaymentUpdateWithoutPaymentLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPage?: PaymentPageUpdateOneWithoutIntiatedPaymentNestedInput
    Transaction?: TransactionUpdateManyWithoutIntiatedPaymentNestedInput
  }

  export type IntiatedPaymentUncheckedUpdateWithoutPaymentLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentPageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutIntiatedPaymentNestedInput
  }

  export type IntiatedPaymentUncheckedUpdateManyWithoutPaymentLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentPageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntiatedPaymentCreateManyPaymentPageInput = {
    id?: string
    initiatedFrom: $Enums.IntiatedFrom
    status: $Enums.IntiatedPaymentStatus
    index: number
    walletAddress: string
    amount: Decimal | DecimalJsLike | number | string
    paymentLinkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPageFormCreateManyPaymentPageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntiatedPaymentUpdateWithoutPaymentPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentLink?: PaymentLinkUpdateOneWithoutIntiatedPaymentNestedInput
    Transaction?: TransactionUpdateManyWithoutIntiatedPaymentNestedInput
  }

  export type IntiatedPaymentUncheckedUpdateWithoutPaymentPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutIntiatedPaymentNestedInput
  }

  export type IntiatedPaymentUncheckedUpdateManyWithoutPaymentPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    status?: EnumIntiatedPaymentStatusFieldUpdateOperationsInput | $Enums.IntiatedPaymentStatus
    index?: IntFieldUpdateOperationsInput | number
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageFormUpdateWithoutPaymentPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentPageFormField?: PaymentPageFormFieldUpdateManyWithoutPaymentPageFormNestedInput
  }

  export type PaymentPageFormUncheckedUpdateWithoutPaymentPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentPageFormField?: PaymentPageFormFieldUncheckedUpdateManyWithoutPaymentPageFormNestedInput
  }

  export type PaymentPageFormUncheckedUpdateManyWithoutPaymentPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyIntiatedPaymentInput = {
    id?: string
    status: $Enums.TransactionStatus
    amount: Decimal | DecimalJsLike | number | string
    initiatedFrom: $Enums.IntiatedFrom
    toAddress: string
    fromAddress: string
    settled: boolean
    settledAt?: Date | string | null
    settledTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutIntiatedPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    settled?: BoolFieldUpdateOperationsInput | boolean
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutIntiatedPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    settled?: BoolFieldUpdateOperationsInput | boolean
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutIntiatedPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    initiatedFrom?: EnumIntiatedFromFieldUpdateOperationsInput | $Enums.IntiatedFrom
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    settled?: BoolFieldUpdateOperationsInput | boolean
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageFormFieldCreateManyPaymentPageFormInput = {
    id?: string
    type: $Enums.PaymentPageFormFieldType
    label: string
    placeholder?: string | null
    required?: boolean
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPageFormFieldUpdateWithoutPaymentPageFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentPageFormFieldTypeFieldUpdateOperationsInput | $Enums.PaymentPageFormFieldType
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageFormFieldUncheckedUpdateWithoutPaymentPageFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentPageFormFieldTypeFieldUpdateOperationsInput | $Enums.PaymentPageFormFieldType
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPageFormFieldUncheckedUpdateManyWithoutPaymentPageFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentPageFormFieldTypeFieldUpdateOperationsInput | $Enums.PaymentPageFormFieldType
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}