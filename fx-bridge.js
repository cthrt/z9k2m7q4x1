(() => {
    const __fxMissing = () => {
        const missing = [];
        if (typeof ct === "undefined" || !ct) missing.push("ct");
        if (typeof d3 === "undefined" || !d3) missing.push("d3");
        if (typeof aR === "undefined" || !aR) missing.push("aR");
        if (typeof kl === "undefined" || !kl) missing.push("kl");
        if (typeof lA === "undefined" || !lA) missing.push("lA");
        if (typeof gD === "undefined" || !gD || !gD.n1) missing.push("gD.n1");
        if (typeof hB === "undefined" || !hB) missing.push("hB");
        if (typeof d5 === "undefined" || !d5) missing.push("d5");
        if (typeof dr === "undefined" || !dr) missing.push("dr");
        if (typeof aF === "undefined" || !aF || !aF.b1 || !aF.k5) missing.push("aF.b1/aF.k5");
        if (typeof dy === "undefined" || !dy || typeof dy.f1 !== "function") missing.push("dy.f1");
        if (typeof tV === "undefined" || !tV) missing.push("tV");
        if (typeof hD === "undefined" || !hD) missing.push("hD");
        if (typeof fU === "undefined" || !fU) missing.push("fU");
        if (!window.__fx || !window.__fx.autoOpening) missing.push("__fx.autoOpening");
        return missing;
    };

    const __fxInstall = () => {
        if (window.__fxBridgeInstalled) return true;
        const missing = __fxMissing();
        if (missing.length) {
            window.__fxBridgeMissing = missing;
            return false;
        }
        try {
            const __fx = window.__fx;

            const o = {
    get bI() { return ct.cv },
    get cF() { return ct.dP },
    get co() { return ct.eG },
    get kg() { return ct.kD },
    get ke() { return ct.mH },
    get fW() { return ct.ut },
    get fS() { return ct.ur },
    get db() { return ct.us },
    get x1() { return ct.uw },
    get fT() { return ct.rk }
};
const eF = {
    get aOq() { return d3.aGp },
    get fQ() { return d3.d4 },
    get fa() { return d3.dL },
    get hu() { return d3.eF },
    get eG() { return d3.dM },
    get eJ() { return d3.dN },
    get eH() { return d3.dS },
    get eK() { return d3.dT }
};
const w = { cO: { iT: (...args) => aR.f.nW(...args), iV: (...args) => aR.f.kk(...args), jD: (...args) => aR.f.oh(...args) } };
const jG = { jH: (...args) => kl.km(...args), aQO: (...args) => kl.aQb(...args), aQP: (...args) => kl.aQd(...args) };
const lF = { cY: (...args) => lA.lB(...args), cL: (...args) => lA.aH1(...args), ca: (...args) => lA.a9G(...args) };
const pH = { a2J: { a7g: (...args) => gD.n1.oY(...args), a7e: (...args) => gD.n1.p3(...args), aKX: (...args) => gD.n1.oW(...args) } };
const kX = { a7h: (...args) => hB.k1(...args) };
const ee = {
    get iH() { return d5.aCW },
    mR: (...args) => d5.fT(...args),
    lb: (...args) => d5.ho(...args),
    mQ: (...args) => d5.a6D(...args),
    lZ: (...args) => d5.l3(...args),
    la: (...args) => d5.hp(...args),
    wd: (...args) => d5.aDT(...args),
    we: (...args) => d5.mw(...args),
    lV: (...args) => d5.kr(...args),
    mU: (...args) => d5.a6G(...args),
    sV: (...args) => d5.l4(...args)
};
const eN = { ed: (...args) => dr.iE(...args), aCm: (...args) => dr.iG(...args) };
const f2 = { aw: { a5e: (...args) => aF.b1.bM(...args), get p4() { return aF.b1.c7 }, aA7: (...args) => aF.b1.aGI(...args) } };
const dY = { get p5() { return dy.aEP == null ? null : { get ww() { return dy.aEP.g7 } } }, hw: (...args) => dy.f2(...args) };
const ar = tV, cQ = { get cl() { return hD.a48 } }, p = { get eP() { return fU.fV }, get eQ() { return fU.iD }, get eR() { return fU.jJ } };
const __fxAttackHost = gD.n1, __fxAttackName = "oY";

            const __fxOriginalAttack=__fxAttackHost[__fxAttackName];__fxAttackHost[__fxAttackName]=function(amount,target,...args){const player=o.co,balance=Math.max(0,Math.floor(Number(eF.fa[player])||0)),result=__fxOriginalAttack.call(this,amount,target,...args);__fx.autoOpening.onAttackApplied?.({local:true,neutral:Number(target)===o.bI,attackerId:player,targetId:Number(target),amount:Number(amount),troops:Math.floor(balance*(Number(amount)+1)/1024),tick:(Number.isFinite(__fx.currentGameTick)?__fx.currentGameTick:0)+1});return result};
const __fxHasBorderState=player=>Number.isInteger(player)&&player>=0&&player<o.bI&&eF.aOq!=null&&eF.aOq[player]!=null;
const __fxHasLivePlayer=player=>__fxHasBorderState(player)&&w.cO.iV(player)&&eF.fQ[player]>0;
const __fxSharesAutoMicroBorder=(player,id)=>{if(!__fxHasBorderState(player)||!__fxHasBorderState(id))return false;const playerBorder=eF.aOq[player],targetBorder=eF.aOq[id],scanTarget=targetBorder.length<playerBorder.length,border=scanTarget?targetBorder:playerBorder,owner=scanTarget?player:id,offsets=ee.iH;for(let index=0;index<border.length;index++)for(let side=3;side>=0;side--){const pixel=border[index]+offsets[side];if(ee.mR(owner,pixel))return true}return false};
const __fxIsAutoMicroTarget=(player,id)=>__fxHasBorderState(player)&&__fxHasBorderState(id)&&id>=o.cF&&eF.fQ[id]>0&&jG.jH(player,id)&&__fxSharesAutoMicroBorder(player,id);
const __fxBuildAutoMicroTarget=(player,id)=>{if(!__fxIsAutoMicroTarget(player,id))return null;const land=eF.fQ[id],balance=Math.max(0,eF.fa[id]),density=balance/land;if(!Number.isFinite(density))return null;return{playerId:id,land:land,balance:balance,density:density,baseKillCost:2*(land+balance),active:lF.cY(player,id)}};
const __fxGetBorderingAutoMicroBots=player=>{const result=new Set,border=__fxHasBorderState(player)?eF.aOq[player]:[],offsets=ee.iH;for(let index=0;index<border.length;index++)for(let side=3;side>=0;side--){const pixel=border[index]+offsets[side],id=ee.lZ(pixel)?ee.la(pixel):-1;if(id>=o.cF&&id<o.bI&&eF.fQ[id]>0)result.add(id)}return result};
const __fxGetAutoMicroData=(excluded=[])=>{const player=o.co,skipped=new Set(excluded),targets=[],targetStates=[];let aliveBots=0;if(!__fxHasLivePlayer(player))return{targets:targets,targetStates:targetStates,aliveBots:aliveBots};for(let id=o.cF;id<o.bI;id++)eF.fQ[id]>0&&aliveBots++;for(const id of __fxGetBorderingAutoMicroBots(player)){const target=__fxBuildAutoMicroTarget(player,id);if(!target)continue;targetStates.push(target);if(!target.active&&!skipped.has(id))targets.push(target)}return{targets:targets,targetStates:targetStates,aliveBots:aliveBots}};
__fx.autoOpening.attack=()=>{const player=o.co,active=lF.cY(player,o.bI),available=jG.aQO(player);return __fxHasLivePlayer(player)&&(active||available)?(pH.a2J.a7g(kX.a7h(),o.bI),true):false};
__fx.autoOpening.attackFreeLand=amount=>{const player=o.co;if(!__fxHasLivePlayer(player))return false;const active=lF.cY(player,o.bI),available=jG.aQO(player),encodedAmount=Number.isFinite(amount)?Math.min(1023,Math.max(0,Math.floor(amount))):kX.a7h();return active||available?(pH.a2J.a7g(encodedAmount,o.bI),true):false};
__fx.autoOpening.getFreeLandExpansionState=()=>{const player=o.co,playerAlive=__fxHasLivePlayer(player);if(!playerAlive)return{playerAlive:false,active:false,hasFreeLand:false,troops:0,balance:0};const active=lF.cY(player,o.bI);return{playerAlive:true,active:active,hasFreeLand:jG.aQO(player),troops:active?lF.cL(player,o.bI):0,balance:eF.fa[player]}};
__fx.autoOpening.getAutoMicroState=(excluded=[])=>{const player=o.co,data=__fxGetAutoMicroData(excluded);return{playerAlive:__fxHasLivePlayer(player),targets:data.targets,targetStates:data.targetStates,ownBalance:__fxHasLivePlayer(player)?eF.fa[player]:0,ownActiveAttacks:__fxHasLivePlayer(player)?lF.ca(player):0,aliveBots:data.aliveBots}};
__fx.autoOpening.getEconomyStats=()=>{const player=o.co,land=__fxHasLivePlayer(player)?eF.fQ[player]:0,overallExpenses=cQ.cl[12]+cQ.cl[13]+cQ.cl[15]+cQ.cl[16];return{land:land,overallExpenses:overallExpenses,efficiencyScore:land>0?overallExpenses/land:null}};
__fx.autoOpening.attackAutoMicroTarget=(targetId,amount)=>{const player=o.co,id=Number(targetId),controls=w.cO,encodedAmount=Math.min(1023,Math.max(0,Math.floor(Number(amount))));if(o.ke||!Number.isFinite(encodedAmount)||!controls.iT(1)||!controls.iV(player)||!__fxIsAutoMicroTarget(player,id)||lF.cY(player,id))return null;pH.a2J.a7g(encodedAmount,id);return{playerId:id,amount:encodedAmount}};
__fx.autoOpening.cancelFreeLandAttack=()=>{const player=o.co;return __fxHasLivePlayer(player)&&lF.cY(player,o.bI)?(pH.a2J.a7e(o.bI),true):false};
const __fxMessiahOutsideBorder=author=>{const result=[],seen=new Set(),border=__fxHasBorderState(author)?eF.aOq[author]:[],offsets=ee.iH;for(let index=0;index<border.length;index++)for(let side=3;side>=0;side--){const pixel=border[index]+offsets[side];if(!ee.mR(author,pixel)&&!seen.has(pixel)){seen.add(pixel);result.push(pixel)}}return result};
const __fxMessiahBorderRatio=(author,target)=>{const border=__fxMessiahOutsideBorder(author);if(border.length===0)return 0;let matching=0;for(let index=0;index<border.length;index++)matching+=target===o.bI?ee.lb(border[index])?1:0:ee.mR(target,border[index])?1:0;return matching/border.length};
const __fxMessiahEntityPixels=id=>{const result=[];if(!__fxHasBorderState(id)||eF.fQ[id]<=0)return result;for(let y=eF.eJ[id];y<=eF.eK[id];y++)for(let x=eF.eG[id];x<=eF.eH[id];x++){const pixel=ee.mQ(x,y);ee.mR(id,pixel)&&result.push(pixel)}return result};
const __fxMessiahEncodedRatio=ratio=>{const balance=eF.fa[o.co],desired=Math.floor(balance*Math.min(1000,Math.max(0,Math.floor(Number(ratio))))/1000);if(balance<=0||desired<=0)return null;let encoded=Math.min(1023,Math.max(0,Math.floor(desired*1024/balance)));while(encoded>0&&Math.floor(balance*(encoded+1)/1024)>desired)encoded--;while(encoded<1023&&Math.floor(balance*(encoded+2)/1024)<=desired)encoded++;return encoded};
const __fxMessiahTroopsForEncoded=(balance,encoded)=>Math.floor(balance*(encoded+1)/1024);
const __fxMessiahExactPlan=(initialBalance,requested)=>{const balance=Math.max(0,Math.floor(Number(initialBalance))),desired=Math.max(0,Math.floor(Number(requested)));if(balance<=0||desired<=0)return null;const exactEncoded=(available,amount)=>{if(available<=0||amount<=0)return null;const encoded=Math.ceil(amount*1024/available)-1;return encoded>=0&&encoded<=1023&&__fxMessiahTroopsForEncoded(available,encoded)===amount?encoded:null};const direct=exactEncoded(balance,desired);if(direct!==null)return{encoded:[direct],troops:desired};const penalty=Math.floor(balance*12/1024);for(let first=0;first<1024;first++){const firstTroops=__fxMessiahTroopsForEncoded(balance,first);if(firstTroops<=0||firstTroops>=desired)continue;const nextBalance=balance-firstTroops-penalty,second=exactEncoded(nextBalance,desired-firstTroops);if(second!==null)return{encoded:[first,second],troops:desired}}return null};
__fx.autoOpening.messiah={getState:()=>{const player=o.co;return{playerAlive:__fxHasLivePlayer(player),playerId:player,playerCount:o.cF,maxEntities:o.bI,singleplayer:o.kg,customLobby:__fx.customLobby?.isActive?.()===true,gameMode:o.fW,width:p.eP,height:p.eQ,land:eF.fQ,balance:eF.fa,offsets:Array.from(ee.iH),getInterestRate:id=>{const normal=Math.max(.01,.07-Math.floor(dY.hw()/10)*.0003125),minimum=(1+Math.sqrt(2.56*Math.max(0,eF.fQ[id])/Math.max(1,o.fS)))/100;return 1+Math.max(normal,minimum)}}},getBorderPixels:id=>__fxHasBorderState(id)?Array.from(eF.aOq[id]):[],getEntityPixels:__fxMessiahEntityPixels,getOwner:pixel=>ee.lZ(pixel)?ee.la(pixel):-1,strongIsOwner:(id,pixel)=>ee.mR(id,pixel),getX:pixel=>ee.wd(pixel),getY:pixel=>ee.we(pixel),getDensity:id=>eF.fQ[id]>0?eF.fa[id]/eF.fQ[id]:Infinity,getBorderRatio:__fxMessiahBorderRatio,getBotTiming:id=>{const timing=Number(ar.fxBotTiming&&ar.fxBotTiming[id]);return Number.isFinite(timing)?timing:Infinity},isAttacking:(author,target)=>__fxHasBorderState(author)&&lF.cY(author,target),getRemainingTroops:(author,target)=>__fxHasBorderState(author)&&lF.cY(author,target)?lF.cL(author,target):0,canAttackFreeLand:id=>__fxMessiahOutsideBorder(id).some(pixel=>ee.lb(pixel))||lF.cY(id,o.bI),attackRatio:(targetId,ratio)=>{const player=o.co,id=Number(targetId),encoded=__fxMessiahEncodedRatio(ratio);if(encoded===null||o.ke||!w.cO.iT(1)||!w.cO.iV(player)||id<0||id>o.bI||id!==o.bI&&!jG.jH(player,id)||lF.cY(player,id))return false;pH.a2J.a7g(encoded,id);return true},attackExactTroops:(targetId,troops)=>{const player=o.co,id=Number(targetId),requested=Math.max(0,Math.floor(Number(troops))),plan=__fxMessiahExactPlan(eF.fa[player],requested);if(o.ke||!w.cO.iT(1)||!w.cO.iV(player)||id<0||id>=o.bI||!jG.jH(player,id))return{sent:false,reason:"unavailable",requested:requested};if(plan===null)return{sent:false,reason:"unrepresentable",requested:requested};for(const encoded of plan.encoded)pH.a2J.a7g(encoded,id);return{sent:true,requested:requested,troops:plan.troops,actions:plan.encoded.length,encoded:plan.encoded}},cancel:targetId=>{const player=o.co,id=Number(targetId);return __fxHasLivePlayer(player)&&lF.cY(player,id)?(pH.a2J.a7e(id),true):false}};
const __fxGetAutoSpawnStatus=()=>{const player=o.co,connected=o.kg||f2.aw.a5e(f2.aw.p4),selectableSpawn=Boolean(o.db&&w.cO.iT(0)),ready=connected&&selectableSpawn&&!o.ke&&Number.isInteger(player)&&player>=0&&player<o.bI&&eF.hu[player]!==0;if(!ready)return{ready:false,singleplayer:o.kg,connected:connected,selectableSpawn:selectableSpawn};const selectionStep=Number.isInteger(dY.p5&&dY.p5.ww)?dY.p5.ww:null,selectionMax=Number.isInteger(o.x1)?o.x1:null,currentSpawn=eF.fQ[player]>0?{x:(eF.eG[player]+eF.eH[player])>>1,y:(eF.eJ[player]+eF.eK[player])>>1}:null;return{ready:true,singleplayer:o.kg,connected:connected,selectableSpawn:selectableSpawn,gameMode:o.fW,mapId:p.eR,isOneVsOne:o.fW===8,currentSpawn:currentSpawn,selectionStep:selectionStep,selectionMax:selectionMax,selectionRemaining:selectionStep===null||selectionMax===null?null:Math.max(0,selectionMax-selectionStep)}};__fx.autoSpawn={getStatus:__fxGetAutoSpawnStatus,getState:()=>{const status=__fxGetAutoSpawnStatus();if(!status.ready)return status;const player=o.co,width=p.eP,height=p.eQ,freeLand=new Uint8Array(width*height),ownableLand=new Uint8Array(width*height),spawns=[];for(let y=0;y<height;y++)for(let x=0;x<width;x++){const pixel=ee.mQ(x,y),ownable=ee.lV(pixel);ownableLand[y*width+x]=ownable?1:0;freeLand[y*width+x]=ownable&&(!ee.mU(pixel)||ee.sV(player,pixel))?1:0}for(let id=0;id<o.bI;id++)if(id!==player&&eF.fQ[id]>0)spawns.push({id:id,x:(eF.eG[id]+eF.eH[id])>>1,y:(eF.eJ[id]+eF.eK[id])>>1,land:eF.fQ[id],human:id<o.cF,bot:id>=o.cF});return{...status,width:width,height:height,freeLand:freeLand,ownableLand:ownableLand,spawns:spawns,humanCount:o.cF,playerCount:o.cF,entityCount:o.bI}},spawn:(x,y)=>{const player=o.co,px=Math.round(Number(x)),py=Math.round(Number(y));if(!o.db||o.ke||(!o.kg&&!f2.aw.a5e(f2.aw.p4))||!Number.isInteger(px)||!Number.isInteger(py)||px<0||py<0||px>=p.eP||py>=p.eQ||!w.cO.iT(0)||!w.cO.iV(player))return false;const pixel=ee.mQ(px,py);if(!ee.lV(pixel)||ee.mU(pixel))return false;const cell=eN.ed(px,py);return eN.aCm(cell)?(o.kg||f2.aw.aA7(f2.aw.p4),pH.a2J.aKX(cell),true):false}};
const __fxDecodedAutoSpawnState=__fx.autoSpawn.getState;__fx.autoSpawn.getState=()=>{const state=__fxDecodedAutoSpawnState();if(!state?.ready)return state;for(const spawn of state.spawns){spawn.human=spawn.id<o.cF;spawn.bot=spawn.id>=o.cF}state.humanCount=o.cF;state.playerCount=o.cF;state.entityCount=o.bI;return state};

            const __fxOriginalTick = dy.f1;
            dy.f1 = function () {
                const result = __fxOriginalTick.apply(this, arguments);
                const tick = dy.f2();
                __fx.currentGameTick = tick;
                try {
                    __fx.autoOpening?.onTick?.(tick);
                } catch (error) {
                    console.error("[retardoclient] onTick failed", error);
                }
                return result;
            };

            if (aF.k5 && typeof aF.k5.aBf === "function") {
                const __fxOriginalDecode = aF.k5.aBf;
                aF.k5.aBf = function (...args) {
                    const result = __fxOriginalDecode.apply(this, args);
                    try {
                        __fx.autoSpawnController?.onDecodedPacket?.(this, args[1]);
                    } catch (error) {
                        console.error("[retardoclient] onDecodedPacket failed", error);
                    }
                    return result;
                };
            }
        } catch (error) {
            window.__fxBridgeError = String((error && error.message) || error);
            console.error("[retardoclient] bridge install failed - game internals changed:", error);
            return true;
        }

        window.__fxBridgeInstalled = true;
        try { delete window.__fxBridgeMissing; } catch (error) {}
        console.log("[retardoclient] game bridge installed");
        return true;
    };

    const __fxOriginalAiCommand = window.aiCommand746;
    if (typeof __fxOriginalAiCommand === "function") {
        window.aiCommand746 = function (...args) {
            const result = __fxOriginalAiCommand.apply(this, args);
            setTimeout(__fxInstall, 0);
            return result;
        };
    }

    window.addEventListener("load", () => setTimeout(__fxInstall, 0));
    const __fxBridgeTimer = setInterval(() => {
        if (__fxInstall()) clearInterval(__fxBridgeTimer);
    }, 200);
    setTimeout(() => {
        clearInterval(__fxBridgeTimer);
        if (!window.__fxBridgeInstalled && !window.__fxBridgeError) {
            console.error("[retardoclient] bridge did not install within 30s. Missing or renamed game internals:", window.__fxBridgeMissing || "unknown");
        }
    }, 30000);
})();
