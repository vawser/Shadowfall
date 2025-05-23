// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2046400000, 2046401950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 2046400800, 905730600, 16);
    InitializeCommonEvent(0, 90005860, 2046400800, 0, 2046400800, 0, 30845, 0);
    InitializeCommonEvent(0, 90005201, 2046400300, 30000, 20000, 1110704128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 2046400301, 2046402301, 0, 0);
    InitializeEvent(0, 2046402200, 2046400200, 2046402200, 2046402201);
    InitializeEvent(1, 2046402200, 2046400201, 2046402200, 2046402202);
    InitializeEvent(2, 2046402200, 2046400202, 2046402200, 2046402203);
    InitializeEvent(0, 2046402550, 580100, 2046401550, 80100);
    InitializeEvent(0, 2046400700, 4926, 4458);
    
    // Starting Flasks
    AwardItemLot(2000);
    
    // Torrent
    InitializeEvent(0, 2046400720, 0);
    InitializeEvent(0, 2046400721, 0);
    
});

$Event(50, Default, function() {
    InitializeEvent(0, 2046402500, 0);
    InitializeEvent(0, 2046402502, 0);
});

// Setup Torrent 
$Event(2046400720, Default, function() {
    DisableCharacter(2046400810);
    DisableCharacterCollision(2046400810);
    
    EndIf(EventFlag(1031390000));
    
    EnableCharacter(2046400810);
    EnableCharacterCollision(2046400810);
    
});

// Befriend Torrent 
$Event(2046400721, Default, function() {
    EndIf(EventFlag(1031390000));
    
    WaitFor(ActionButtonInArea(1200, 2046400810))
    
    WaitFixedTimeSeconds(0.4);
    
    SpawnOneshotSFX(2, 2046400810, 220, 302061);
    ForceAnimationPlayback(2046400810, 20001, false, false, true, 0, 1);
    
    WaitFixedTimeSeconds(2);
    
    AwardItemLot(100000);
    
    DisableCharacter(2046400810);
    DisableCharacterCollision(2046400810);
    
    SetEventFlagID(1031390000, ON);
});

$Event(2046400700, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(X0_4));
    SetEventFlagID(X0_4, ON);
    SetEventFlagID(X4_4, ON);
});

$Event(2046402500, Restart, function() {
    EndIf(EventFlag(2046400500));
    EndIf(!PlayerInMap(61, 46, 40, 0));
    SetCurrentTime(8, 0, 0, false, false, false, 0, 0, 0);
    FreezeTime(true);
    WaitFor((PlayerIsInOwnWorld() && !InArea(10000, 2046402500)) || !PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(2046400500, ON);
    }
L1:
    FreezeTime(false);
});

$Event(2046402502, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2046400502));
    EndIf(!PlayerInMap(61, 46, 40, 0));
    DisableAreaWelcomeMessage();
    WaitFor(PlayerIsInOwnWorld() && !InArea(10000, 2046402502));
    EnableAreaWelcomeMessage();
    DisplayAreaWelcomeMessage(68000);
    SetEventFlagID(2046400502, ON);
});

$Event(2046402200, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeSeconds(1, 10);
    if (!EventFlag(70)) {
        if (EventFlag(50)) {
            ShootBullet(X0_4, X8_4, 900, 804508000, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X8_4, 900, 804508010, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X8_4, 900, 804508020, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X8_4, 900, 804508030, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X8_4, 900, 804508040, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X8_4, 900, 804508050, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X8_4, 900, 804508060, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X8_4, 900, 804508070, 0, 0, 0);
        }
    } else {
L0:
        if (EventFlag(50)) {
            ShootBullet(X0_4, X8_4, 900, 804518000, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X8_4, 900, 804518010, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X8_4, 900, 804518020, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X8_4, 900, 804518030, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X8_4, 900, 804518040, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X8_4, 900, 804518050, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X8_4, 900, 804518060, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X8_4, 900, 804518070, 0, 0, 0);
        }
    }
L1:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2046402550, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!PlayerIsInOwnWorld());
    DeleteAssetfollowingSFX(X4_4, false);
    CreateAssetfollowingSFX(X4_4, 200, 806845);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9310, X4_4));
    DeleteAssetfollowingSFX(X4_4, true);
    PlaySE(X4_4, SoundType.SFX, 806841);
    WaitFixedTimeSeconds(0.1);
    AwardItemsIncludingClients(X8_4);
});
