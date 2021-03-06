/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface GreeterInterface extends ethers.utils.Interface {
  functions: {
    "getMyLuckyNumber()": FunctionFragment;
    "ownerToLuckyNumber(address)": FunctionFragment;
    "saveLuckyNumber(uint256)": FunctionFragment;
    "sum(uint256,uint256)": FunctionFragment;
    "updateLuckyNumber(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getMyLuckyNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownerToLuckyNumber",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "saveLuckyNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sum",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLuckyNumber",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMyLuckyNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerToLuckyNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saveLuckyNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateLuckyNumber",
    data: BytesLike
  ): Result;

  events: {};
}

export class Greeter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GreeterInterface;

  functions: {
    getMyLuckyNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    ownerToLuckyNumber(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    saveLuckyNumber(
      _luckyNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sum(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateLuckyNumber(
      _luckyNumber: BigNumberish,
      _newLuckyNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getMyLuckyNumber(overrides?: CallOverrides): Promise<BigNumber>;

  ownerToLuckyNumber(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  saveLuckyNumber(
    _luckyNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sum(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateLuckyNumber(
    _luckyNumber: BigNumberish,
    _newLuckyNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getMyLuckyNumber(overrides?: CallOverrides): Promise<BigNumber>;

    ownerToLuckyNumber(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saveLuckyNumber(
      _luckyNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sum(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateLuckyNumber(
      _luckyNumber: BigNumberish,
      _newLuckyNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getMyLuckyNumber(overrides?: CallOverrides): Promise<BigNumber>;

    ownerToLuckyNumber(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saveLuckyNumber(
      _luckyNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sum(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateLuckyNumber(
      _luckyNumber: BigNumberish,
      _newLuckyNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMyLuckyNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerToLuckyNumber(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    saveLuckyNumber(
      _luckyNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sum(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateLuckyNumber(
      _luckyNumber: BigNumberish,
      _newLuckyNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
